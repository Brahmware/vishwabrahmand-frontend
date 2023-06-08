import { useEffect, useState } from "react";
import { Typography, Skeleton } from "@mui/material";

import Article, { SectionTitle } from "../../../components/common/section";
import Paragraph, {
  ParagraphTitle,
  BlockedParagraph,
  ListItemParagraph,
  ListParagraph,
  NoDataParagraph,
} from "../../../components/common/paragraph";

import { AboutData, companyPageData } from "../../../__mocks__/pages/companypage";
import LoadingComponent from "../../../components/common/loading";

const AboutSection = () => {
  const [aboutData, setAboutData] = useState<AboutData>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { aboutData } = await companyPageData.getAboutData();
        setAboutData(aboutData);
        setIsLoading(false);
      } catch (error) {
        // Handle error here
        console.error("Error fetching about data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Article component="article">
      <SectionTitle>About</SectionTitle>
      {isLoading ? (
        <>
          <Skeleton animation="wave" height={20} width="80%" />
          <Skeleton animation="wave" height={100} width="100%" />
          <Skeleton animation="wave" height={10} width="70%" />
          <Skeleton animation="wave" height={100} width="90%" />
        </>
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
                      <Typography>No items to display.</Typography>
                    )}
                  </ListParagraph>
                );
            })()}
          </Paragraph>
        ))
      ) : (
        <Typography>No data available.</Typography>
      )}
    </Article>
  );
};

export default AboutSection;
