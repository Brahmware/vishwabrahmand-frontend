import React, { useEffect, useState } from 'react';
import {
  Box,
  styled,
} from '@mui/material';
import Section, { SectionTitle } from '../../components/common/section';
import { NewsCard, pressPageData } from '../../__mocks__/pages/presspage';
import { NoDataParagraph } from '../../components/common/paragraph';
import LoadingComponent from '../../components/common/loading';
import NewsCardComponent from './NewsCard';
import Pagination from '../../components/common/pagination';

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
  const [newsData, setNewsData] = useState<NewsCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(5); // Number of news to show per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { pressReleases }: { pressReleases: NewsCard[] } = await pressPageData.getPressReleases();
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

  const handleChangePage = (_event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeNewsPerPage = (event: { target: { value: any } }) => {
    setNewsPerPage(event.target.value as number);
    setPage(1); // Reset the page when changing news per page
  };

  const startIndex = (page - 1) * newsPerPage;
  const endIndex = startIndex + newsPerPage;

  return (
    <PressPageWrapper>
      <Section>
        <SectionTitle>Press Releases</SectionTitle>
        {isLoading ? (
          <NoDataParagraph>
            <LoadingComponent loaderType="box" />
          </NoDataParagraph>
        ) : newsData && newsData.length > 0 ? (
          <>
            <NewsCards>
              {newsData.slice(startIndex, endIndex).map((newsCard, index) => (
                <React.Fragment key={index}>
                  <NewsCardComponent cardData={newsCard} />
                </React.Fragment>
              ))}
            </NewsCards>
            <Pagination
              itemsData={newsData}
              itemsPerPage={newsPerPage}
              page={page}
              handleChangePage={handleChangePage}
              handleChangeItemsPerPage={handleChangeNewsPerPage}

            />
          </>
        ) : (
          <NoDataParagraph>No data found</NoDataParagraph>
        )}
      </Section>
    </PressPageWrapper>
  );
};

export default PressPage;
