import { useEffect, useState } from "react";
import { Typography, Skeleton, styled, Box } from "@mui/material";

import Article, { SectionTitle } from "../../../components/common/section";
import Paragraph, {
  ParagraphTitle,
  BlockedParagraph,
  ListItemParagraph,
  ListParagraph,
} from "../../../components/common/paragraph";

import { AboutData, companyPageData } from "../../../__mocks__/pages/companypage";
import { useTranslation } from "react-i18next";

const SkeletonWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.customSpaces.sm,
}));

const AboutSection = () => {
  const [aboutData, setAboutData] = useState<AboutData>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { aboutData } = await companyPageData.getAboutData();
        setAboutData(aboutData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching about data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Article component="article">
      <SectionTitle>{t("__ABOUT_PAGE_ABOUT_TITLE")}</SectionTitle>
      {isLoading ? (
        <SkeletonWrapper>
          <Skeleton
            animation="wave"
            height={20}
            width={`calc(60% + ${Math.random() * 20}%)`}
          />
          <Skeleton
            animation="wave"
            height={100}
            width="100%"
          />
          <Skeleton
            animation="wave"
            height={10}
            width={`calc(40% + ${Math.random() * 20}%)`}
          />
          <Skeleton
            animation="wave"
            height={100}
            width={`calc(70% + ${Math.random() * 20}%)`}
          />
        </SkeletonWrapper>
      ) : aboutData && aboutData.length > 0 ? (
        aboutData.map((paragraph, index) => (
          <Paragraph key={index}>
            <ParagraphTitle>{paragraph.paragraphTitle}</ParagraphTitle>
            {(() => {
              if (paragraph.displayType === "block")
                return (
                  <BlockedParagraph>{paragraph.paragraphBody}</BlockedParagraph>
                );

              if (paragraph.displayType === "list")
                return (
                  <ListParagraph>
                    {paragraph.paragraphList && paragraph.paragraphList.length ? (
                      paragraph.paragraphList.map((listItem, index) => (
                        <ListItemParagraph key={index}>{listItem}</ListItemParagraph>
                      ))
                    ) : (
                      <Typography>{t("__NOTHING_TO_DISPLAY")}</Typography>
                    )}
                  </ListParagraph>
                );
            })()}
          </Paragraph>
        ))
      ) : (
        <Typography>{t("__NO_DATA_TO_DISPLAY")}</Typography>
      )}
    </Article>
  );
};

export default AboutSection;
