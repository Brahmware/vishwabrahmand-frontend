import React, { useEffect, useState, useMemo } from 'react';
import Section, { SectionTitle } from '../../../components/common/section';
import { Box, styled } from '@mui/material';
import NewsCardComponent from '../../../pages/PressPage/NewsCard';
import { NewsCard, pressPageData } from '../../../__mocks__/pages/presspage';
import RecentArticleCarousel from './RecentArticleCarousel';
import { useParams } from 'react-router-dom';


const RecentArticlesSection = styled(Section)(({ theme }) => ({
  ...theme.bodyProps,
  paddingTop: 0,
  marginTop: theme.customSpaces.xl,
}));

const RecentArticles = () => {
  const [newsData, setNewsData] = useState<NewsCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { articleId: currentArticleId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { pressReleases } = await pressPageData.getPressReleases();
        const otherReleases = pressReleases.filter((release) => release.id !== currentArticleId);
        
        setNewsData(otherReleases);
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
