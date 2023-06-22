import React from 'react';
import {
  Card,
  CardMedia,
  CardMediaProps,
  CardProps,
  styled
} from '@mui/material';
import { useSvgComponentDimensions } from '../../../utils/useSvgComponentDimensions';
import getOptimizedDimension from '../../../utils/getOptimizedDimensions';
import useRotate from '../../../utils/useRotate';

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

const Background = (
  {
    className
  }: {
    className?: string
  }
) => {

  return (
    <BgImageWrapper
      className={className}
      elevation={0}
      optimizeddimensions={
        getOptimizedDimension({
          svgDimensions: useSvgComponentDimensions('uni__svg'),
          maskDimensions: useSvgComponentDimensions('mask'),
        })
      }
      rotation={useRotate()}
    >
      <BGImage
        component="img"
        src="/images/homepage-background.jpg"
        alt="image of the observable universe"
      />
    </BgImageWrapper>
  );
};

export default Background;
