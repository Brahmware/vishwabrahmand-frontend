import React, { useEffect, useState } from 'react';
import { Box, styled, useTheme } from '@mui/material';
import Section, { SectionTitle } from '../../components/common/section';
import { NewsCard } from '../../__mocks__/pages/presspage';
import LoadingComponent from '../../components/common/loading';
import NewsCardComponent, { NewsCardSkeleton } from './NewsCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { pressPageData } from '../../__mocks__/pages/presspage';
import { useContainerMinHeight } from '../../utils/useContainerMinHeight';
import { useAddRootClass } from '../../utils/useAddRootClass';
import config from '../../config';

interface PressPageWrapperProps {
  containerminheight?: number;
};

const PressPageWrapper = styled(Box)<PressPageWrapperProps>(({ theme, containerminheight }) => ({
  ...theme.bodyProps,
  minHeight: `${containerminheight}px`,
  width: '100%',
  padding: theme.itemBodyProps.padding,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: theme.customSpaces.xl,
}));

export const NewsCardsPlaceholder = styled(Box)(({ theme }) => ({
  ...theme.bodyProps,
  padding: 0,
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.customSpaces.md,
}));


const NewsCards = styled(InfiniteScroll)(({ theme }) => ({
  ...theme.bodyProps,
  padding: 0,
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.customSpaces.md,
}));



const PressPage = () => {

  const theme = useTheme();

  const [newsData, setNewsData] = useState<NewsCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { pressReleases }: { pressReleases: NewsCard[] } = await pressPageData.getPressReleases(); // Update the type of `pressReleases`
        setNewsData(pressReleases);
        setIsLoading(false);
      } catch (error) {
        // Handle error here
        console.error('Error fetching news data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchMoreNews = async () => {
    try {
      const newsPerPage = config.defaultNewsPerPage; // Number of news cards per page
      const nextPage = page + 1;
      const start = (nextPage - 1) * newsPerPage;
      const end = nextPage * newsPerPage;

      const { pressReleases }: { pressReleases: NewsCard[] } = await pressPageData.getPressReleases(false, start, end);
      if (pressReleases.length > 0) {
        setNewsData((prevNewsData) => [...prevNewsData, ...pressReleases]);
        setPage(nextPage);
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      // Handling error here
      console.error('Error fetching more news:', error);
    }
  };

  useAddRootClass('press-page');
  return (
    <PressPageWrapper containerminheight={useContainerMinHeight()}>
      <Section>
        <SectionTitle>Press Releases</SectionTitle>
        {isLoading && newsData.length === 0 ? (
          <NewsCardsPlaceholder sx={{ pb: theme.customPadding.xxl }}>
            {[...Array(12)].map((_, index) => (
              <NewsCardSkeleton key={index} />
            ))}
          </NewsCardsPlaceholder>
        ) : (
          <NewsCards
            dataLength={newsData.length}
            next={fetchMoreNews}
            hasMore={hasMore}
            loader={<LoadingComponent loaderType='box' />}
            endMessage={<p>No more articles to load</p>}
            scrollableTarget="root"
          >
            {newsData.map((newsCard, index) => (
              <React.Fragment key={index}>
                <NewsCardComponent cardData={newsCard} />
              </React.Fragment>
            ))}
          </NewsCards>
        )}
      </Section>
    </PressPageWrapper>
  );
};

export default PressPage;
