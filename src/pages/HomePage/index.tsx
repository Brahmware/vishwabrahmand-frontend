import { Box, BoxProps, Typography, styled } from '@mui/material';
import { useWindowHeight } from '../../utils/useWindowHeight';

interface HomePageWrapperProps extends BoxProps {
  windowheight?: number;
};

const HomePageWrapper = styled(Box)<HomePageWrapperProps>(({ theme, windowheight }) => ({
  height: `calc(${windowheight}px - ${theme.customHeights.navBarHeight})`,
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
}));

const HighlightSpan = styled(Typography)(({ theme }) => ({
  ...theme.textSelectionVarient.varient_bhashma_on_white,
  fontWeight: theme.customWeight.sectionTitle,
  fontSize: theme.customSizes.sectionTitle,
  color: theme.customColors.slogan,
}));

const HomePage = () => {

  const windowHeight = useWindowHeight();

  return (
    <HomePageWrapper windowheight={windowHeight}>
      <HighlightSpan>Universe is all we see.</HighlightSpan>
    </HomePageWrapper>
  );
};

export default HomePage;
