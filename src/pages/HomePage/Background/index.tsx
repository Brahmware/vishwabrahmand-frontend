import { Box, BoxProps, CardMedia, CardMediaProps, styled } from '@mui/material';
import React from 'react'
import { useSvgComponentDimensions } from '../../../utils/useSvgComponentDimensions';


const ImageWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  gridColumn: '1 / 13',
  gridRow: '1 / 13',
  zIndex: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  minWidth: theme.breakpoints.xxs,
  minHeight: theme.breakpoints.xxs,
  position: 'relative',
}));


interface BGImageProps extends CardMediaProps {
  component?: React.ElementType;
  alt: string;
  containerdimension?: {
    width: number;
    height: number;
  };
  animationduration?: number;
  opacity?: number;
};


const BGImage = styled(CardMedia)<BGImageProps>(({ theme, containerdimension, animationduration, opacity }) => ({
  position: 'absolute',
  width: containerdimension?.width,
  height: containerdimension?.height,
  padding: theme.customPadding.xs,
  margin: '0px',
  objectFit: 'cover',
  borderRadius: '50%',
  animation: `rotation ${animationduration ? animationduration : 600}s infinite linear`,
  opacity: opacity ? opacity : 1,

  [theme.breakpoints.up('md')]: {
    transform: 'scale(1.3333)',
  },
}));

const Background = () => {

  const maskDimensions = useSvgComponentDimensions('mask');


  return (
    <>
      <ImageWrapper>
        <BGImage
          containerdimension={maskDimensions}
          component="img"
          image="/images/homepage-background.jpg"
          alt="mask"
          animationduration={600}
        />
      </ImageWrapper>
    </>
  )
}

export default Background