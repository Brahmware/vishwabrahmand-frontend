import { Box, BoxProps, CardMedia, CardMediaProps, Typography, styled } from '@mui/material';
import { useContainerMinHeight } from '../../utils/useContainerMinHeight';
import { useEffect } from 'react';
import SpaceFiller from './SpaceFiller';
import MaskingImageComponent from './Mask';
import Background from './Background';
interface HomePageWrapperProps extends BoxProps {
  containerminheight?: number;
};

const HomePageWrapper = styled(Box)<HomePageWrapperProps>(
  ({
    theme,
    containerminheight
  }) => ({
    position: 'relative',
    width: '100vw',
    height: `${containerminheight}px`,
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(12, 1fr)',
  })
);



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
      {/* <SpaceFiller /> */}
      <Background />
      <MaskingImageComponent />
    </HomePageWrapper>
  );
};

export default HomePage;
