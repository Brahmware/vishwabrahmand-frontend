import { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Link, Typography, styled, Grid, Skeleton, useTheme } from "@mui/material";
import Section, { SectionTitle } from "../../../components/common/section";
import { FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon } from "../../../Assets/Logo/Icons";
import { Leaders, companyPageData } from "../../../__mocks__/pages/companypage";

type CardMediaProps = {
  image: string;
  alt: string;
};

const SocialIcon = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  "& svg": {
    height: theme.customSizes.socialIcon,
    width: theme.customSizes.socialIcon,
  },
}));

const SectionContentWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(10em, 1fr))", // Updated property
  gap: theme.customSpaces.md,
  marginTop: theme.customSpaces.md,
  justifyItem: "space-between",
}));

const LeaderCard = styled(Card)({
  maxWidth: "100%", // Updated property
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const LeaderCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.customSpaces.md,
  flex: "1 0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const LeaderCardMedia = styled(
  ({ ...props }: CardMediaProps) => <CardMedia component="img" {...props} />
)(({ theme }) => ({
  width: "100%",
  aspectRatio: "1/1",
  borderRadius: theme.customSizes.borderRadius,
  marginBottom: theme.customSpaces.xs,
  filter: "grayscale(100%)",
  transition: "filter 0.3s ease-in-out",
  "&:hover": {
    filter: "none",
  },
}));

const InformationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.customSpaces.sm,
}));

const SocialIconWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.customSpaces.sm,
  display: "flex",
  justifyContent: "center",
  gap: theme.customSpaces.md,
}));

const LeaderName = styled(Typography)(({ theme }) => ({
  fontSize: "1em",
  fontWeight: theme.customFontWeight.semiBold,
  textAlign: "center",
  height: "3em",
}));

const LeaderDesignation = styled(Typography)(({ theme }) => ({
  fontSize: "0.65em",
  textAlign: "center",
  fontWeight: theme.customFontWeight.medium,
  color: theme.customColors.rakthalal,
}));

const SkeletonCard = styled(Card)(({ theme }) => ({
  maxWidth: "100%", // Updated property
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const SkeletonCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.customSpaces.md,
  flex: "1 0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
}));

const SkeletonLeaderCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "100%",
  aspectRatio: "1/1",
  borderRadius: theme.customSizes.borderRadius,
  marginBottom: theme.customSpaces.xs,
}));

const LeadershipSection = () => {
  
  const theme = useTheme();

  const [leadersData, setLeadersData] = useState<Leaders>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { leadersData } = await companyPageData.getAboutData();
        setLeadersData(leadersData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching leaders data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      // Render skeleton loading cards
      const skeletonCards = Array.from({ length: 8 }, (_, index) => (
        <SkeletonCard key={index} elevation={0}>
          <SkeletonLeaderCardMedia>
            <Skeleton variant="rectangular" width="100%" height="100%" sx={{ borderRadius: '0.5em' }} />
          </SkeletonLeaderCardMedia>
          <SkeletonCardContent>
            <Skeleton width="30%" height="10" />
            <Skeleton width="50%" height="10" />
            <InformationWrapper>
              <SocialIconWrapper>
                {Array.from({ length: 4 }, (_, index) => (
                  <Skeleton
                    key={index}
                    variant="circular"
                    width={theme.customSizes.socialIcon}
                    height={theme.customSizes.socialIcon}
                  />
                ))}
              </SocialIconWrapper>
            </InformationWrapper>
          </SkeletonCardContent>
        </SkeletonCard>
      ));

      return (
        <SectionContentWrapper>
          {skeletonCards}
        </SectionContentWrapper>
      );
    } else {
      // Render actual leader cards
      return (
        <SectionContentWrapper>
          {leadersData.map((leader, index) => (
            <LeaderCard key={index} elevation={0}>
              <LeaderCardMedia image={leader.imageURL} alt={leader.name} />
              <LeaderCardContent>
                <LeaderName> {leader.name} </LeaderName>
                <LeaderDesignation> {leader.designation} </LeaderDesignation>
                <InformationWrapper>
                  <SocialIconWrapper>
                    <SocialIcon href={leader.socialHandles.facebook} target="_blank" rel="noopener noreferrer">
                      <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon href={leader.socialHandles.twitter} target="_blank" rel="noopener noreferrer">
                      <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon href={leader.socialHandles.youtube} target="_blank" rel="noopener noreferrer">
                      <YoutubeIcon />
                    </SocialIcon>
                    <SocialIcon href={leader.socialHandles.instagram} target="_blank" rel="noopener noreferrer">
                      <InstagramIcon />
                    </SocialIcon>
                  </SocialIconWrapper>
                </InformationWrapper>
              </LeaderCardContent>
            </LeaderCard>
          ))}
        </SectionContentWrapper>
      );
    }
  };

  return (
    <Section>
      <SectionTitle>Leadership</SectionTitle>
      {renderContent()}
    </Section>
  );
};

export default LeadershipSection;
