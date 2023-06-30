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
import config from '../../../config';

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
    background: 'black'
  })
);

const BGImage = styled(CardMedia)<BGImageProps>(({ theme }) => ({
  animation: theme.animations.rotating,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

const randomIndex = Math.floor(Math.random() * config.bgWallpapers.length);
const bgImageWrapper = config.bgWallpapers[randomIndex];

const Background = (
  {
    className,
    screenType = 'widescreen',
  }: {
    className?: string
    screenType?: 'widescreen' | 'narrowscreen'
  }
) => {


  return (
    <BgImageWrapper
      className={className + ' bgimage'}
      elevation={0}
      optimizeddimensions={
        getOptimizedDimension({
          svgDimensions: useSvgComponentDimensions('uni__svg'),
          maskDimensions: useSvgComponentDimensions('mask'),
          type: screenType === 'widescreen' ? 'max' : 'min',
        })
      }
      rotation={useRotate()}
    >
      <BGImage
        component="img"
        src={bgImageWrapper}
        alt="image of the observable universe"
      />
    </BgImageWrapper>
  );
};

export default Background;
