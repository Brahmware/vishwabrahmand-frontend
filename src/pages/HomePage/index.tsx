import { Box, BoxProps, Typography, styled } from '@mui/material';
import { useContainerMinHeight } from '../../utils/useContainerMinHeight';
import { useEffect } from 'react';

interface HomePageWrapperProps extends BoxProps {
  containerminheight?: number;
};

const HomePageWrapper = styled(Box)<HomePageWrapperProps>(
  ({ 
    theme, 
    containerminheight
  }) => ({
  height: `${containerminheight}px`,
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

  const containerMinHeight = useContainerMinHeight();

  useEffect(() => {
    document.getElementById('root')?.classList.add('home');

    return () => {
      document.getElementById('root')?.classList.remove('home');
    }
  }, []);

  return (
    <HomePageWrapper containerminheight={containerMinHeight}>
      <HighlightSpan>Universe is all we see.</HighlightSpan>
    </HomePageWrapper>
  );
};

export default HomePage;
