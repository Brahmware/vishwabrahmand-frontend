import React, { useEffect, useState, useMemo } from 'react';
import Section, { SectionTitle } from '../../../components/common/section';
import { Box, styled } from '@mui/material';
import NewsCardComponent from '../../../pages/PressPage/NewsCard';
import { NewsCard, pressPageData } from '../../../__mocks__/pages/presspage';
import RecentArticleCarousel from './RecentArticleCarousel';


const RecentArticlesSection = styled(Section)(({ theme }) => ({
  marginTop: theme.customSpaces.xl,
}));

const RecentArticles = () => {
  const [newsData, setNewsData] = useState<NewsCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { pressReleases } = await pressPageData.getPressReleases();
        setNewsData(pressReleases);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const slides = useMemo(
    () =>
      newsData.map((newsCard, index) => (
        <React.Fragment key={index}>
          <NewsCardComponent cardData={newsCard} />
        </React.Fragment>
      )),
    [newsData]
  );

  return (
    <RecentArticlesSection>
      <SectionTitle>Recent Releases</SectionTitle>
      <RecentArticleCarousel slides={slides} />
    </RecentArticlesSection>
  );
};

export default RecentArticles;
