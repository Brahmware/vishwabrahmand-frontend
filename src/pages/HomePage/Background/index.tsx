import { CardMedia, CardMediaProps, styled } from '@mui/material';
import React from 'react'

interface BackgroundImageProps extends CardMediaProps {
  component: string;
  image: string;
  alt: string;
  sx?: any;
};


const BackgroundImage = styled(CardMedia)<BackgroundImageProps>(
  ({ theme }) => ({
    position: 'absolute',
    gridColumn: '1 / 13',
    width: '100vw',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1,
  })
);

const Background = () => {
  return (
    <BackgroundImage
      component="img"
      image="https://nightsky.jpl.nasa.gov/images/news/HDP_896.jpg"
      alt="Home"
    />
  )
}

export default Background