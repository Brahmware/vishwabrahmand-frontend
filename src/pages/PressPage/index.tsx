import React, { useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import Section, { SectionTitle } from '../../components/common/section';
import { NewsCard } from '../../__mocks__/pages/presspage'; // Assuming `NewsCard` is exported from `presspageData.js`
import { NoDataParagraph } from '../../components/common/paragraph';
import LoadingComponent from '../../components/common/loading';
import NewsCardComponent from './NewsCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { pressPageData } from '../../__mocks__/pages/presspage';

const PressPageWrapper = styled(Box)(({ theme }) => ({
  ...theme.bodyProps,
  width: '100%',
  padding: theme.itemBodyProps.padding,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: theme.customSpaces.xl,
}));

const NewsCards = styled(Box)(({ theme }) => ({
  ...theme.bodyProps,
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'start',
  gap: theme.customSpaces.md,
}));

const PressPage = () => {
  const [newsData, setNewsData] = useState<NewsCard[]>([]); // Specify the type of `newsData` as `NewsCard[]`
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
      const newsPerPage = 10; // Number of news cards per page
      const nextPage = page + 1;
      const start = (nextPage - 1) * newsPerPage;
      const end = nextPage * newsPerPage;

      const { pressReleases }: { pressReleases: NewsCard[] } = await pressPageData.getPressReleases(false, start, end);
      if (pressReleases.length > 0) {
        setNewsData((prevNewsData) => [...prevNewsData, ...pressReleases]);
        setPage(nextPage);
        setHasMore(true); // Set `hasMore` to true when there are more pages to fetch
      } else {
        setHasMore(false); // Set `hasMore` to false when there are no more pages to fetch
      }
    } catch (error) {
      // Handle error here
      console.error('Error fetching more news:', error);
    }
  };

  return (
    <PressPageWrapper>
      <Section>
        <SectionTitle>Press Releases</SectionTitle>
        {isLoading && newsData.length === 0 ? (
          <NoDataParagraph>
            <LoadingComponent loaderType="box" />
          </NoDataParagraph>
        ) : (
          <>
            <InfiniteScroll
              dataLength={newsData.length}
              next={fetchMoreNews}
              hasMore={hasMore}
              loader={<LoadingComponent loaderType="box" />}
              endMessage={<p>No more news to load</p>}
              scrollableTarget="root"
            >
              <NewsCards>
                {newsData.map((newsCard, index) => (
                  <React.Fragment key={index}>
                    <NewsCardComponent cardData={newsCard} />
                  </React.Fragment>
                ))}
              </NewsCards>
            </InfiniteScroll>
          </>
        )}
      </Section>
    </PressPageWrapper>
  );
};

export default PressPage;
