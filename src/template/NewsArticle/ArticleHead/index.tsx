import React from 'react'
import { useContainerMinHeight } from '../../../utils/useContainerMinHeight';
import { Box, BoxProps, CardMedia, CardMediaProps, Typography, styled } from '@mui/material';
import { NewsCard } from '../../../__mocks__/pages/newspage';
import { useParallax } from '../../../utils/useParallax';
import config from '../../../config';

interface NewsHeadlineViewProps extends BoxProps {
  containerheight?: number;
};

const NewsHeadlineView = styled(Box)<NewsHeadlineViewProps>(({ theme, containerheight }) => ({
  ...theme.bodyProps,
  padding: 0,
  marginTop: 0,
  marginBottom: 0,
  width: '100%',
  height: containerheight,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflowY: 'hidden',
  gap: theme.customSpaces.md,
  transition: 'height 0.3s ease',

  [theme.breakpoints.down('md')]: {
    height: 'calc(100dvh - 4.5em)',
  },
}));

interface HeadImageWrapperProps extends BoxProps {
  containerheight?: number;
};

const HeadImageWrapper = styled(Box)<HeadImageWrapperProps>(({ theme, containerheight }) => ({
  alignSelf: 'center',
  justifySelf: 'center',
  width: '100%',
  height: containerheight,
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'end',
  overflowY: 'hidden',
  zIndex: -1,

  [theme.breakpoints.down('md')]: {
    height: 'calc(100dvh - 4.5em)',
  },
}));

interface HeadImageProps extends CardMediaProps {
  containerheight?: number;
  parallax?: number;
  component?: string;
  alt?: string;
};

const HeadImage = styled(CardMedia)<HeadImageProps>(({ parallax }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transform: `translateY(${parallax || 0}px)`,
}));

const HeaderTextWrapper = styled(Box)(({ theme }) => ({
  ...theme.bodyProps,
  paddingBottom: theme.customSpaces.xl,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'end',
  gap: theme.customSpaces.md,
  overflowY: 'hidden',
  zIndex: 1,
  textShadow: '0 0 0.75rem black',

  '& ::selection': {
    background: `${theme.customColors.rakthalal}80`,
  },
}));

const NewsHeadline = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: theme.customFontWeight.bold,
  lineHeight: '1.2',
  color: theme.customColors.white,
  zIndex: 1,

  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
  },
}));

const PublishingDate = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  color: theme.customColors.white,
  zIndex: 1,

  [theme.breakpoints.down('md')]: {
    fontSize: '1.125rem',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const ArticleHead = (
  {
    headline,
    pubDate,
    headerImage
  }: {
    headline: NewsCard['headline'],
    pubDate: NewsCard['pubDate'],
    headerImage: NewsCard['image']
  }
) => {

  const containerHeight = useContainerMinHeight();

  return (
    <NewsHeadlineView containerheight={containerHeight} >
      <HeadImageWrapper containerheight={containerHeight}>
        <HeadImage
          component="img"
          image={headerImage}
          alt={headline}
          parallax={useParallax({
            slag: config.parallaxSlag
          })}
        />
      </HeadImageWrapper>

      <HeaderTextWrapper>
        <NewsHeadline>
          {headline}
        </NewsHeadline>
        <PublishingDate variant="h4">
          {pubDate}
        </PublishingDate>
      </HeaderTextWrapper>
    </NewsHeadlineView>
  )
}

export default ArticleHead