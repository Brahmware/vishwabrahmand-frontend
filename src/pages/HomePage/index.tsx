import { Box, Typography, styled } from '@mui/material';

const HomePageWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: `calc(100vh - calc(100vh - 100%) - ${theme.customHeights.navBarHeight} - ${theme.customHeights.footerHeight})`,
}));

const HighlightSpan = styled(Typography)(({ theme }) => ({
  ...theme.textSelectionVarient.varient_bhashma_on_white,
  fontWeight: theme.customWeight.sectionTitle,
  fontSize: theme.customSizes.sectionTitle,
  color: theme.customColors.slogan,
}));

const HomePage = () => {
  return (
    <HomePageWrapper>
      <HighlightSpan>Universe is all we see.</HighlightSpan>
    </HomePageWrapper>
  );
};

export default HomePage;
