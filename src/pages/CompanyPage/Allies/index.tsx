import { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography, styled, Skeleton, useTheme } from "@mui/material";
import Section, { SectionTitle } from "../../../components/common/section";
import { companyPageData, Allies } from "../../../__mocks__/pages/companypage";
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "../../../Assets/Logo/Icons";
import { SocialIcon } from "../../../components/common/SocialIcon";

type CardMediaProps = {
  image: string;
  alt: string;
};

const SectionContentWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(12em, 1fr))", // Updated property
  gap: theme.customSpaces.md,
  marginTop: theme.customSpaces.md,
  justifyItem: "space-between",
}));

const AlliesCard = styled(Card)(({theme}) => ({
  maxWidth: "100%", // Updated property
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: `1px solid ${theme.customColors.border}`,
  minWidth: "200px",
}));

const BrandCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.customSpaces.md,
  paddingTop: 0,
  flex: "1 0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const AllyCardMedia = styled(
  ({ ...props }: CardMediaProps) => <CardMedia component="img" {...props} />
)(({ theme }) => ({
  width: "60%",
  aspectRatio: "1/1",
  borderRadius: theme.customSizes.borderRadius,
  filter: theme.grayScales.g_100,
  opacity: 0.5,
  transition: "opacity 0.6s ease 0.3s",
  "&:hover": {
    filter: "none",
    opacity: 1,
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

const AllyName = styled(Typography)(({ theme }) => ({
  fontSize: "1em",
  fontWeight: theme.customFontWeight.semiBold,
  textAlign: "center",
  height: "2em",
}));

const AreaOfService = styled(Typography)(({ theme }) => ({
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

const SkeletonCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "100%",
  aspectRatio: "1/1",
  borderRadius: theme.customSizes.borderRadius,
  marginBottom: theme.customSpaces.xs,
}));


const LoadingSkeleton = () => {

  const theme = useTheme();

  return (
    <>
      {[...Array(4)].map((_, index) => (
        <SkeletonCard key={index} elevation={0}>
          <SkeletonCardMedia>
            <Skeleton variant="rectangular" width="100%" height="100%" sx={{ borderRadius: "0.5em" }} />
          </SkeletonCardMedia>
          <SkeletonCardContent>
            <Skeleton width={`calc(20% + ${Math.random() * 20}%)`} height="10" />
            <Skeleton width={`calc(60% + ${Math.random() * 20}%)`} height="10" />
            <InformationWrapper>
              <SocialIconWrapper>
                {[...Array(4)].map((_, index) => (
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
      ))}
    </>
  );
};

const AlliesSection = () => {
  const [alliesData, setBrandsData] = useState<Allies>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { alliesData }: { alliesData: Allies } = await companyPageData.getAboutData();
        setBrandsData(alliesData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching brands data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Section>
      <SectionTitle>Allies</SectionTitle>
      {isLoading ? (
        <SectionContentWrapper>
          <LoadingSkeleton />
        </SectionContentWrapper>
      ) : (
        <SectionContentWrapper>
          {alliesData.map((brand, index) => (
            <AlliesCard key={index} elevation={0}>
              <AllyCardMedia image={brand.imageURL} alt={brand.name} />
              <BrandCardContent>
                <AllyName> {brand.name} </AllyName>
                <AreaOfService> {brand.areaOfService} </AreaOfService>
                <InformationWrapper>
                <SocialIconWrapper>
                    <SocialIcon
                      href={brand.socialHandles.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon
                      href={brand.socialHandles.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon
                      href={brand.socialHandles.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinIcon />
                    </SocialIcon>
                    <SocialIcon
                      href={brand.socialHandles.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />
                    </SocialIcon>
                  </SocialIconWrapper>
                </InformationWrapper>
              </BrandCardContent>
            </AlliesCard>
          ))}
        </SectionContentWrapper>
      )}
    </Section>
  );
};

export default AlliesSection;
