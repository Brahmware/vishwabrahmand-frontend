import React, { Fragment } from 'react';
import { Box, BoxProps, Typography, styled } from '@mui/material';
import { useContainerMinHeight } from '../../utils/useContainerMinHeight';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../../components/common/section';
import useTextScrambler from '../../utils/useTextScrambler';
import { RightArrowIconThick } from '../../Assets/Logo/Icons';
import { useAddRootClass } from '../../utils/useAddRootClass';
import config from '../../config';
import { useTranslation } from 'react-i18next';
import { Lang } from '../../i18n';
import Head from './Head';

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

  '& *': {
    whiteSpace: 'nowrap',
  },

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
  borderRadius: '0.125em',
  backgroundColor: theme.customColors.rakthalal,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.customColors.white,
  fontSize: theme.customSizes.sectionTitle,
  fontWeight: theme.customFontWeight.bold,
  animation: theme.animations.shapeShift,

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
  const { t, i18n } = useTranslation();

  const lang = i18n.language as Lang;
  const characters = config.letters[lang].split('');
  const page404Text = t("__PAGE_404_TEXT");
  const page404Link = t("__PAGE_404_LINK");

  const {
    text404,
    textLink
  } = useTextScrambler(
    page404Text,
    page404Link,
    characters,
    config.loadDelay
  );

  return (
    <Fragment>
      <Head />
      <Page404Wrapper containerheight={useContainerMinHeight()}>
        <Image404 className='noselect'>404</Image404>
        <SectionTitle >{text404}</SectionTitle>
        <ArrowLink to={config.page404LinkUrl} replace>
          {textLink}
          <ArrowIcon />
        </ArrowLink>
      </Page404Wrapper>
    </Fragment>
  );
};

export default Page404;
