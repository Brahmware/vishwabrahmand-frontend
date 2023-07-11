import { useContainerMaxHeight } from '../../../utils/useContainerMinHeight';
import { Box, BoxProps, CardMedia, CardMediaProps, Typography, styled } from '@mui/material';
import { NewsCard } from '../../../__mocks__/pages/newspage';
import { useParallax } from '../../../utils/useParallax';
import config from '../../../config';
import IconButton from '../../../components/common/buttons/IconButton';
import { MouseIcon } from '../../../Assets/Logo/Icons';
import { useTranslation } from 'react-i18next';
import { ScrollToOptions } from '../../../utils/useScrollToTop';

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
  paddingBottom: theme.customSpaces.md,
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

const ScrollDownButton = styled(IconButton)(({ theme }) => ({
  alignSelf: 'center',
  animation: theme.animations.bouncing,

  fontSize: '1.125rem',
  gap: theme.customSpaces.xs,
  borderRadius: '2em',
  padding: `0.35rem 0.75rem 0.35rem ${theme.customSpaces.xs}`,
  fontWeight: theme.customFontWeight.regular,
  background: `${theme.customColors.bhasma}70`,
  boxShadow: '0 0 1rem black',
  backdropFilter: 'blur(0.125rem)',
  color: theme.customColors.white,
  borderColor: `${theme.customColors.white} !important`,
  
  '& svg path': {
    transition: 'fill 0.3s ease-in-out',
    fill: theme.customColors.white,
  },
  
  '&:hover': {
    background: theme.customColors.white,
    color: theme.customColors.bhasma,
    boxShadow: '0 0 0.133rem black',
    animationPlayState: 'paused',

    '& svg path': {
      fill: theme.customColors.bhasma,
    },
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

  const containerHeight = useContainerMaxHeight();
  const scrollTo: ScrollToOptions = {
    top: containerHeight,
    behavior: 'smooth'
  };

  const handleScrollClick = () => {
    const scrollableBody = document.getElementById('scrollbar-component')?.childNodes[0] as HTMLElement;
    if (scrollableBody) {
      scrollableBody.scrollTo(scrollTo);
    } else {
      window.scrollTo(scrollTo);
    }
  };

  const { t } = useTranslation();

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
        <ScrollDownButton
          variant='outlined'
          onClick={handleScrollClick}
          aria-label={t("__NEWS_ARTICLE_SCROLL_DOWN_BUTTON_TEXT")}
        >
          <MouseIcon
            height='1.5rem'
            width='1.5rem'
          />
          {t("__NEWS_ARTICLE_SCROLL_DOWN_BUTTON_TEXT")}
        </ScrollDownButton>
      </HeaderTextWrapper>
    </NewsHeadlineView>
  )
}

export default ArticleHead