import React, { useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import Section, { SectionTitle } from '../../components/common/section';
import { Brand, brandsPageData } from '../../__mocks__/pages/brandspage';
import { NoDataParagraph } from '../../components/common/paragraph';
import BrandCard, { BrandCardSkeleton } from './Brand';
import Pagination from '../../components/common/pagination';

const BrandsPageWrapper = styled(Box)(({ theme }) => ({
  ...theme.bodyProps,
  width: '100%',
  padding: theme.itemBodyProps.padding,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
}));

const ThemedSectionTitle = styled(SectionTitle)(({ theme }) => ({
  paddingBottom: theme.customSpaces.xxs,
}));

const BrandsPage = () => {
  const [brandsData, setBrandsData] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [brandsPerPage, setBrandsPerPage] = useState(5); // Number of brands to show per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { brands }: { brands: Brand[] } = await brandsPageData.getBrands();
        setBrandsData(brands);
        setIsLoading(false);
      } catch (error) {
        // Handle error here
        console.error("Error fetching brands data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (_event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeBrandsPerPage = (event: { target: { value: any } }) => {
    setBrandsPerPage(Number(event.target.value));
    setPage(1); // Reset the page to 1 when changing the number of brands per page
  };

  // Calculate the start and end index of the brands to show based on the current page
  const startIndex = (page - 1) * brandsPerPage;
  const endIndex = startIndex + brandsPerPage;

  return (
    <BrandsPageWrapper>
      <Section>
        <ThemedSectionTitle>Company Brands</ThemedSectionTitle>
        {isLoading ? (
          <>
            {[...Array(brandsPerPage)].map((_, index) => (
              <BrandCardSkeleton key={index} />
            ))}
          </>
        ) : brandsData && brandsData.length > 0 ? (
          <>
            {brandsData.slice(startIndex, endIndex).map((brandData, index) => (
              <React.Fragment key={index}>
                <BrandCard
                  brandData={brandData}
                  isLast={
                    index === Math.min(
                      brandsPerPage,
                      brandsData.slice(startIndex, endIndex).length
                    ) - 1
                  }
                />
              </React.Fragment>
            ))}
            <Pagination
              itemsData={brandsData}
              itemsPerPage={brandsPerPage}
              page={page}
              handleChangeItemsPerPage={handleChangeBrandsPerPage}
              handleChangePage={handleChangePage}
            />
          </>
        ) : (
          <NoDataParagraph>No data found</NoDataParagraph>
        )}
      </Section>
    </BrandsPageWrapper>
  );
};

export default BrandsPage
