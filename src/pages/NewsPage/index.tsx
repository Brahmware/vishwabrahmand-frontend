import React, { Fragment, useEffect, useState } from 'react';
import { Box, styled, useTheme } from '@mui/material';
import Section, { SectionTitle } from '../../components/common/section';
import LoadingComponent from '../../components/common/loading';
import NewsCardComponent, { NewsCardSkeleton } from './NewsCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useContainerMinHeight } from '../../utils/useContainerMinHeight';
import { useAddRootClass } from '../../utils/useAddRootClass';
import config from '../../config';
import { useTranslation } from 'react-i18next';
import { NewsCard, newsPageData } from '../../__mocks__/pages/newspage';
import Head from './Head';

interface NewsPageWrapperProps {
  containerminheight?: number;
};

const NewsPageWrapper = styled(Box)<NewsPageWrapperProps>(({ theme, containerminheight }) => ({
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



const NewsPage = () => {

  const theme = useTheme();
  const { t } = useTranslation();

  const [newsData, setNewsData] = useState<NewsCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { newsReleases }: { newsReleases: NewsCard[] } = await newsPageData.getNewsReleases();
        setNewsData(newsReleases);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching news data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchMoreNews = async () => {
    try {
      const newsPerPage = config.defaultNewsPerPage;
      const nextPage = page + 1;
      const start = (nextPage - 1) * newsPerPage;
      const end = nextPage * newsPerPage;

      const { newsReleases }: { newsReleases: NewsCard[] } = await newsPageData.getNewsReleases(false, start, end);
      if (newsReleases.length > 0) {
        setNewsData((prevNewsData) => [...prevNewsData, ...newsReleases]);
        setPage(nextPage);
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching more news:', error);
    }
  };

  useAddRootClass('news-page');
  return (
    <Fragment>
      <Head />
      <NewsPageWrapper containerminheight={useContainerMinHeight()}>
        <Section>
          <SectionTitle>{t("__NEWS_PAGE_NEWS_TITLE")}</SectionTitle>
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
              endMessage={<p>{t("__NOTHING_TO_DISPLAY")}</p>}
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
      </NewsPageWrapper>
    </Fragment>
  );
};

export default NewsPage;
