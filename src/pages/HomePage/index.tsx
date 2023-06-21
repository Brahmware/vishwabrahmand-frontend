import { Box, BoxProps, styled } from '@mui/material';
import { useContainerMinHeight } from '../../utils/useContainerMinHeight';
import { useEffect } from 'react';
import MaskingImageComponent from './Mask';
interface HomePageWrapperProps extends BoxProps {
  containerminheight?: number;
};

const HomePageWrapper = styled(Box)<HomePageWrapperProps>(
  ({
    containerminheight
  }) => ({
    position: 'relative',
    width: '100vw',
    height: `${containerminheight || 1080}px`,
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(12, 1fr)',
    alignItems: 'center',
    justifyContent: 'center',
  })
);



const HomePage = () => {

  const containerMinHeight = useContainerMinHeight();

  useEffect(() => {

    document.getElementById('root')?.classList.add('home-page');

    return () => {
      document.getElementById('root')?.classList.remove('home-page');
    }
  }, []);

  return (
    <HomePageWrapper containerminheight={containerMinHeight}>
      <MaskingImageComponent />
    </HomePageWrapper>
  );
};

export default HomePage;
