import { Box, Card, CardMedia, Typography, styled, useTheme } from '@mui/material';
import Section, { SectionTitle } from '../../components/common/section';
import { useEffect, useState } from 'react';
import { Brand, brandsPageData } from '../../__mocks__/pages/brandspage';
import { NoDataParagraph } from '../../components/common/paragraph';
import LoadingComponent from '../../components/common/loading';
import { RightArrowIcon } from '../../Assets/Logo/Icons';
import { Pagination, Select, MenuItem } from '@mui/material';

const BrandsPageWrapper = styled(Box)(({ theme }) => ({
  ...theme.bodyProps,
  width: '100%',
  padding: `${theme.customPadding.xl} ${theme.customPadding.sm} 0`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
}));

const UnderlinedSectionTitle = styled(SectionTitle)(({ theme }) => ({
  borderBottom: `1px solid ${theme.customColors.matmaila}`,
  paddingBottom: theme.customSpaces.xxs,
}));

const BrandsCard = styled(Card)(({ theme }) => ({
  ...theme.bodyProps,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: `${theme.customSpaces.lg} ${theme.customSpaces.md}`,
  borderBottom: `1px solid ${theme.customColors.matmaila}`,
  borderRadius: 0,
}));

const ArrowLink = styled('a')(({ theme }) => ({
  padding: theme.customSpaces.md,
  color: theme.customColors.rakthalal,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  '&:hover': {
    color: theme.customColors.bhasma,
  }
}));

const ArrowIcon = styled(RightArrowIcon)(({ theme }) => ({
  color: theme.customColors.rakthalal,
  width: '1.5em',
  marginLeft: theme.customSpaces.xs,
}));

const BrandName = styled(Typography)(({ theme }) => ({
  fontWeight: theme.customFontWeight.semiBold,
  fontSize: '1.125em',
  color: theme.customColors.bhasma,
  paddingBottom: theme.customSpaces.md,
}));

const BrandDescription = styled(Typography)(({ theme }) => ({
  fontWeight: theme.customFontWeight.regular,
  fontSize: '0.75em',
  color: theme.customColors.bhasma,
}));

const PaginationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: `calc(-1 * ${theme.customSpaces.md})`,
}));

const BrandsPage = () => {
  const [brandsData, setBrandsData] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [brandsPerPage, setBrandsPerPage] = useState(5); // Number of brands to show per page

  const theme = useTheme();

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

  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeBrandsPerPage = (event: { target: { value: any; }; }) => {
    setBrandsPerPage(Number(event.target.value));
    setPage(1); // Reset the page to 1 when changing the number of brands per page
  };

  // Calculate the start and end index of the brands to show based on the current page
  const startIndex = (page - 1) * brandsPerPage;
  const endIndex = startIndex + brandsPerPage;

  return (
    <BrandsPageWrapper>
      <Section>
        <UnderlinedSectionTitle>Company Brands</UnderlinedSectionTitle>
        {isLoading ? (
          <NoDataParagraph>
            <LoadingComponent loaderType="box" />
          </NoDataParagraph>
        ) : brandsData && brandsData.length > 0 ? (
          <>
            {brandsData.slice(startIndex, endIndex).map((brand, index) => (
              <BrandsCard elevation={0} key={index}>
                <CardMedia
                  component="img"
                  image={brand.image}
                  alt={brand.name}
                  sx={{ width: '10em', height: '10em', objectFit: 'contain', margin: theme.customSpaces.sm }}
                />
                <Box sx={{ margin: theme.customSpaces.md, flexGrow: 1 }}>
                  <BrandName>{brand.name}</BrandName>
                  <BrandDescription>{brand.description}</BrandDescription>
                </Box>
                {brand?.website && (
                  <ArrowLink href={brand.website}>
                    <ArrowIcon />
                  </ArrowLink>
                )}
              </BrandsCard>
            ))}
            {brandsData.length > brandsPerPage && (
              <PaginationContainer>
                <Box sx={{ my: theme.customSpaces.sm, flexGrow: 1, position: 'relative' }}>
                  <Typography variant="body2" sx={{ display: 'inline-block', marginRight: '8px' }}>
                    Display per page:
                  </Typography>
                  <Select value={brandsPerPage} onChange={handleChangeBrandsPerPage}>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                  </Select>
                </Box>
                <Pagination
                  count={Math.ceil(brandsData.length / brandsPerPage)} // Calculate the total number of pages
                  page={page}
                  onChange={handleChangePage}
                  sx={{ my: theme.customSpaces.sm }}
                />
              </PaginationContainer>
            )}
          </>
        ) : (
          <NoDataParagraph>No data found</NoDataParagraph>
        )}
      </Section>
    </BrandsPageWrapper>
  );
};

export default BrandsPage;
