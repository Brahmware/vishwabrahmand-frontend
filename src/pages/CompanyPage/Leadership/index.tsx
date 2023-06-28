import { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography, styled, Skeleton, useTheme, CardMediaProps } from "@mui/material";
import Section, { SectionTitle } from "../../../components/common/section";
import { Leaders, companyPageData } from "../../../__mocks__/pages/companypage";
import SocialButtons from "../../../components/common/SocialButtons";

const SectionContentWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(10em, 1fr))",
  gap: theme.customSpaces.md,
  marginTop: theme.customSpaces.md,
  justifyItems: "space-between",
}));

const LeaderCard = styled(Card)(({ theme }) => ({
  maxWidth: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",

  '& img': {
    transition: "filter, transform 0.3s ease-in",
  },

  "&:hover": {
    '& img': {
      filter: "none",
      transform: "scale(1.05)",
    },
  },
}));

const LeaderCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.customSpaces.md,
  flex: "1 0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

interface LeaderCardMediaProps extends CardMediaProps {
  component?: React.ElementType;
  alt: string;
  src: string;
}

const LeaderCardMedia = styled(CardMedia)<LeaderCardMediaProps>(({ theme }) => ({
  width: "100%",
  aspectRatio: "1/1",
  filter: "grayscale(100%)",
}));

const LeaderCardMediaImageWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: theme.customSizes.borderRadius,
  overflow: "hidden",
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
  ...theme.textSelectionVarient.varient_rakthalal_on_white,
  fontSize: "0.65em",
  textAlign: "center",
  fontWeight: theme.customFontWeight.medium,
  color: theme.customColors.rakthalal,
}));

const SkeletonCard = styled(Card)(({ theme }) => ({
  maxWidth: "100%",
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
            <Skeleton variant="rectangular" width="100%" height="100%" sx={{ borderRadius: "0.5em" }} />
          </SkeletonLeaderCardMedia>
          <SkeletonCardContent>
            <Skeleton width={`calc(20% + ${Math.random() * 20}%)`} height="10" />
            <Skeleton width={`calc(60% + ${Math.random() * 20}%)`} height="10" />
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
              <LeaderCardMediaImageWrapper>
                <LeaderCardMedia
                  component="img"
                  src={leader.imageURL}
                  alt={leader.name}
                />
              </LeaderCardMediaImageWrapper>
              <LeaderCardContent>
                <LeaderName> {leader.name} </LeaderName>
                <LeaderDesignation> {leader.designation} </LeaderDesignation>
                <InformationWrapper>
                  <SocialButtons socialHandles={leader.socialHandles} />
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
