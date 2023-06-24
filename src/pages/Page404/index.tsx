import { Box, BoxProps, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useContainerMinHeight } from '../../utils/useContainerMinHeight';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../../components/common/section';
import useTextScrambler from '../../utils/useTextScrambler';
import { RightArrowIconThick } from '../../Assets/Logo/Icons';
import { useAddRootClass } from '../../utils/useAddRootClass';

interface Page404WrapperProps extends BoxProps {
  containerheight?: number;
}

const Page404Wrapper = styled(Box)<Page404WrapperProps>(({ theme, containerheight }) => ({
  position: 'relative',
  width: '100vw',
  height: `${containerheight || 1080}px`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
  gap: theme.customSpaces.lg,

  [theme.breakpoints.down('md')]: {
    fontSize: '0.875rem',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
  },
}));

const Image404 = styled(Typography)(({ theme }) => ({
  aspectRatio: '1/1',
  padding: '0.33em',
  borderRadius: '50%',
  backgroundColor: theme.customColors.rakthalal,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.customColors.white,
  fontSize: theme.customSizes.sectionTitle,
  fontWeight: theme.customFontWeight.bold,
}));

const ArrowLink = styled(Link)(({ theme }) => ({
  ...theme.textSelectionVarient.varient_rakthalal_on_white,
  color: theme.customColors.rakthalal,
  textTransform: 'none',
  fontSize: '1.125rem',
  fontWeight: theme.customWeight.navbar,
  transition: 'color 0.3s ease-in-out',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.customSpaces.md,


  '&:hover': {
    textDecoration: 'underline !important',

    '& svg': {
      transform: 'rotate(45deg)',
    },
  },
}));

const ArrowIcon = styled(RightArrowIconThick)(({ theme }) => ({
  height: '1.5rem',
  width: '1.5rem',
  color: theme.customColors.rakthalal,
  transition: 'color, transform 0.3s ease-in-out',
  marginLeft: 0,
}));

const Page404: React.FC = () => {

  useAddRootClass('page-404');
  
  const [text404, setText404] = useState('');
  const [textLink, setTextLink] = useState('');
  
  useEffect(() => {
    const characters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890-=+<>,./?[{()}]!@#$%^&*~`\\|'.split('');

    const setCharAt = (str: string, index: number, chr: string) => {
      if (index > str.length - 1) return str;
      return str.substr(0, index) + chr + str.substr(index + 1);
    };
    
    
    const string404 = 'Page not found.'; // Replace with your actual 404 text
    const stringLink = 'Go to Home Page'; // Replace with your actual link text
    const total404 = string404.length;
    const totalLink = stringLink.length;

    let progress404 = 0;
    let progressLink = 0;

    const scrambleInterval = setInterval(() => {
      let scrambled404 = string404;
      let scrambledLink = stringLink;

      for (let i = 0; i < total404; i++) {
        if (i >= progress404) {
          scrambled404 = setCharAt(
            scrambled404,
            i,
            characters[Math.round(Math.random() * (characters.length - 1))]
          );
        }
      }

      for (let i = 0; i < totalLink; i++) {
        if (i >= progressLink) {
          scrambledLink = setCharAt(
            scrambledLink,
            i,
            characters[Math.round(Math.random() * (characters.length - 1))]
          );
        }
      }

      setText404(scrambled404);
      setTextLink(scrambledLink);
    }, 1000 / 60);

    setTimeout(() => {
      const revealInterval = setInterval(() => {
        if (progress404 < total404) {
          progress404++;
        } else if (progressLink < totalLink) {
          progressLink++;
        } else {
          clearInterval(revealInterval);
          clearInterval(scrambleInterval);
        }
      }, 50);
    }, 1000);

    return () => {
      clearInterval(scrambleInterval);
    };
  }, []);

  return (
    <Page404Wrapper containerheight={useContainerMinHeight()}>
      <Image404 className='noselect'>404</Image404>
      <SectionTitle>{text404}</SectionTitle>
      <ArrowLink to="/" replace>
        {textLink}
        <ArrowIcon />
      </ArrowLink>
    </Page404Wrapper>
  );
};

export default Page404;
