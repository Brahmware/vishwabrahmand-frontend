import { Fragment, useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography, styled, Skeleton, useTheme } from "@mui/material";
import Section, { SectionTitle } from "../../../components/common/section";
import { companyPageData, Ally } from "../../../__mocks__/pages/companypage";
import SocialButtons, { SocialIconWrapper } from "../../../components/common/SocialButtons";
import { useTranslation } from "react-i18next";

type CardMediaProps = {
  image: string;
  alt: string;
};

const AllySectionWrap = styled(Section)(({ theme }) => ({
  width: "100%",
  padding: `${theme.customSpaces.lg} 0`,
}));

const SectionContentWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(12em, 1fr))",
  gap: theme.customSpaces.md,
  marginTop: theme.customSpaces.md,
  justifyItem: "space-between",
}));

const AlliesCard = styled(Card)(({ theme }) => ({
  maxWidth: "100%",
  height: "100%",
  minHeight: "250px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: `1.5px solid ${theme.customColors.border}`,
  minWidth: "200px",
  transition: "border 0.3s ease-in 0.2s",

  '&:hover': {
    border: `1.5px solid ${theme.customColors.matmaila}`,

    '& .ally__logo': {
      filter: "none",
      opacity: 1,
    },

    '& .ally__name': {
      color: theme.customColors.bhasma,
    },

    '& .ally__area-of-service': {
      color: theme.customColors.rakthalal,
    },
  },

  [theme.breakpoints.down("md")]: {
    '& .ally__logo': {
      filter: "none",
      opacity: 1,
    },

    '& .ally__name': {
      color: theme.customColors.bhasma,
    },

    '& .ally__area-of-service': {
      color: theme.customColors.rakthalal,
    },
  },

}));

const BrandCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.customSpaces.md,
  paddingTop: 0,
  flex: "1 0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

interface AllyCardMediaProps extends CardMediaProps {
  component: "img" | "video" | "iframe" | "picture" | "svg";
}

const AllyCardMedia = styled(CardMedia)<AllyCardMediaProps>(({ theme }) => ({
  width: "60%",
  aspectRatio: "1/1",
  borderRadius: theme.customSizes.borderRadius,
  filter: theme.grayScales.g_100,
  opacity: 0.5,
  transition: "opacity 0.3s ease-in 0.2s",
}));

const InformationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.customSpaces.sm,
}));


const AllyName = styled(Typography)(({ theme }) => ({
  fontSize: "1em",
  fontWeight: theme.customFontWeight.semiBold,
  color: theme.customColors.matmaila,
  textAlign: "center",
  height: "2em",
  whiteSpace: "nowrap",
  transition: 'color 0.3s ease-in 0.2s',
}));

const AreaOfService = styled(Typography)(({ theme }) => ({
  ...theme.textSelectionVarient.varient_rakthalal_on_white,
  fontSize: "0.65em",
  textAlign: "center",
  fontWeight: theme.customFontWeight.medium,
  color: theme.customColors.slogan,
  transition: 'color 0.3s ease-in 0.2s',
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
    <Fragment>
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
    </Fragment>
  );
};

const AlliesSection = () => {
  const [alliesData, setBrandsData] = useState<Ally[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { alliesData }: { alliesData: Ally[] } = await companyPageData.getAboutData();
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
    <AllySectionWrap>
      <SectionTitle>{t("__ABOUT_PAGE_ALLIES_TITLE")}</SectionTitle>
      {isLoading ? (
        <SectionContentWrapper>
          <LoadingSkeleton />
        </SectionContentWrapper>
      ) : (
        <SectionContentWrapper>
          {alliesData.map((brand, index) => (
            <AlliesCard key={index} elevation={0}>
              <AllyCardMedia
                className="ally__logo"
                component="img"
                image={brand.imageURL}
                alt={brand.name}
              />
              <BrandCardContent>
                <AllyName className="ally__name noselect"> {brand.name} </AllyName>
                <AreaOfService className="ally__area-of-service"> {brand.areaOfService} </AreaOfService>
                <InformationWrapper>
                  <SocialButtons socialHandles={brand.socialHandles} />
                </InformationWrapper>
              </BrandCardContent>
            </AlliesCard>
          ))}
        </SectionContentWrapper>
      )}
    </AllySectionWrap>
  );
};

export default AlliesSection;
