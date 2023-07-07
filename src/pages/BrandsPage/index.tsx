import React, { Fragment, useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import { SectionTitle } from '../../components/common/section';
import { Brand, brandsPageData } from '../../__mocks__/pages/brandspage';
import { NoDataParagraph } from '../../components/common/paragraph';
import BrandCard, { BrandCardSkeleton } from './Brand';
import Pagination from '../../components/common/pagination';
import { useContainerMinHeight } from '../../utils/useContainerMinHeight';
import { useAddRootClass } from '../../utils/useAddRootClass';
import config from '../../config';
import { useTranslation } from "react-i18next";
import Head from './Head';

interface BrandsPageWrapperProps {
  containerminheight?: number;
};

const BrandsPageWrapper = styled(Box)<BrandsPageWrapperProps>(({ theme, containerminheight }) => ({
  ...theme.bodyProps,
  minHeight: `${containerminheight}px`,
  width: '100%',
  padding: theme.itemBodyProps.padding,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
}));

const ThemedSectionTitle = styled(SectionTitle)(({ theme }) => ({
  paddingBottom: theme.customSpaces.xxs,
}));

const BrandsPage = () => {

  const [brandsData, setBrandsData] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(config.defaultStartPage);
  const [brandsPerPage, setBrandsPerPage] = useState(config.defaultNumberOfBrandsPerPage);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { brands }: { brands: Brand[] } = await brandsPageData.getBrands();
        setBrandsData(brands);
        setIsLoading(false);
      } catch (error) {
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
    setPage(config.defaultStartPage);
  };

  const startIndex = (page - 1) * brandsPerPage;
  const endIndex = startIndex + brandsPerPage;

  useAddRootClass('brands-page');
  return (
    <Fragment>
      <Head />
      <BrandsPageWrapper containerminheight={useContainerMinHeight()}>
        <ThemedSectionTitle>{t("__BRANDS_PAGE_BRANDS_TITLE")}</ThemedSectionTitle>
        {isLoading ? (
          <>
            {[...Array(brandsPerPage)].map((_, index) => (
              <BrandCardSkeleton key={index} isLast={index === [...Array(brandsPerPage)].length - 1} />
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
                    ) - 1 ? true : false
                  }
                />
              </React.Fragment>
            ))}
            <Box sx={{
              width: '100%',
              flexGrow: 1,
            }} />
            <Pagination
              itemsData={brandsData}
              itemsPerPage={brandsPerPage}
              page={page}
              handleChangeItemsPerPage={handleChangeBrandsPerPage}
              handleChangePage={handleChangePage}
            />
          </>
        ) : (
          <NoDataParagraph>{t("__NO_DATA_TO_DISPLAY")}</NoDataParagraph>
        )}
      </BrandsPageWrapper>
    </Fragment>
  );
};

export default BrandsPage
