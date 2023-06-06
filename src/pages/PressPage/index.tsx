import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  styled,
  useTheme,
  Typography,
  Select,
  MenuItem,
  Pagination,
} from '@mui/material';
import Section, { SectionTitle } from '../../components/common/section';
import { NewsCard, pressPageData } from '../../__mocks__/pages/presspage';
import { NoDataParagraph } from '../../components/common/paragraph';
import LoadingComponent from '../../components/common/loading';
import NewsCardComponent from './NewsCard';

const PressPageWrapper = styled(Box)(({ theme }) => ({
  ...theme.bodyProps,
  width: '100%',
  padding: `${theme.customPadding.xl} ${theme.customPadding.sm}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: theme.customSpaces.xl,
}));

const PressPage = () => {
  const [newsData, setNewsData] = useState<NewsCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(5); // Number of news to show per page

  const theme = useTheme();

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

  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
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
            {newsData.slice(startIndex, endIndex).map((newsCard, index) => (
              <NewsCardComponent />
            ))}
            {newsData.length > newsPerPage && (
              <Box sx={{ my: theme.customSpaces.sm, display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ marginRight: '8px' }}>
                  Display per page:
                </Typography>
                <Select value={newsPerPage} onChange={handleChangeNewsPerPage}>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                </Select>
                <Pagination
                  count={Math.ceil(newsData.length / newsPerPage)} // Calculate the total number of pages
                  page={page}
                  onChange={handleChangePage}
                  sx={{ marginLeft: 'auto' }}
                />
              </Box>
            )}
          </>
        ) : (
          <NoDataParagraph>No data found</NoDataParagraph>
        )}
      </Section>
    </PressPageWrapper>
  );
};

export default PressPage;
