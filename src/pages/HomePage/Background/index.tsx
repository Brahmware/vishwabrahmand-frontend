import React, { useEffect, useState } from 'react';
import {
  Card,
  CardMedia,
  CardMediaProps,
  CardProps,
  styled
} from '@mui/material';
import { useSvgComponentDimensions } from '../../../utils/useSvgComponentDimensions';
import getOptimizedDimension from '../../../utils/getOptimizedDimensions';

interface BgImageWrapperProps extends CardProps {
  optimizeddimensions: number;
  rotation: number;
}

interface BGImageProps extends CardMediaProps {
  component?: React.ElementType;
  alt: string;
  src: string;
}

const BgImageWrapper = styled(Card)<BgImageWrapperProps>(
  ({ theme, optimizeddimensions, rotation }) => ({
    position: 'absolute',
    height: optimizeddimensions + 'px',
    width: optimizeddimensions + 'px',
    aspectRatio: '1 / 1',
    padding: '0px',
    margin: '0px',
    borderRadius: '50%',
    overflow: 'hidden',
    zIndex: 1,
    transform: `rotate(${rotation}deg)`,
    transition: `transform ${theme.timing.medium}ms ease 10ms`,
  })
);

const BGImage = styled(CardMedia)<BGImageProps>(({ theme }) => ({
  animation: theme.animations.rotating,
}));

const Background = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const scrollDelta = event.deltaY;
      const rotationDelta = scrollDelta / 20; // Adjust the rotation sensitivity as needed
      setRotation((prevRotation) => prevRotation + rotationDelta);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touchDelta = event.touches[0].clientY - event.touches[0].screenY;
        const rotationDelta = touchDelta / 20; // Adjust the rotation sensitivity as needed
        setRotation((prevRotation) => prevRotation + rotationDelta);
      }
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const optimizedDimensions = getOptimizedDimension({
    svgDimensions: useSvgComponentDimensions('uni__svg'),
    maskDimensions: useSvgComponentDimensions('mask'),
  });

  return (
    <BgImageWrapper elevation={0} optimizeddimensions={optimizedDimensions} rotation={rotation}>
      <BGImage
        component="img"
        src="/images/homepage-background.jpg"
        alt="image of the observable universe"
      />
    </BgImageWrapper>
  );
};

export default Background;
