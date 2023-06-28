import { Box, BoxProps, styled } from '@mui/material';
import { useContainerMinHeight } from '../../utils/useContainerMinHeight';
import MaskingImageComponent from './Mask';
import { useAddRootClass } from '../../utils/useAddRootClass';
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
    overflow: 'hidden',
  })
);



const HomePage = () => {

  useAddRootClass('home-page');
  return (
    <HomePageWrapper containerminheight={useContainerMinHeight()}>
      <MaskingImageComponent />
    </HomePageWrapper>
  );
};

export default HomePage;
