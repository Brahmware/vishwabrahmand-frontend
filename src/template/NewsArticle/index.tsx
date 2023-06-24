import { Box, BoxProps, styled } from '@mui/material';
import { useAddRootClass } from '../../utils/useAddRootClass';
import { useContainerMinHeight } from '../../utils/useContainerMinHeight';

interface NewsArticleWrapperProps extends BoxProps {
  containerheight?: number;
};

const NewsArticleWrapper = styled(Box)<NewsArticleWrapperProps>(({ theme, containerheight }) => ({
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

const NewsArticle = () => {

  useAddRootClass('news-article');

  return (
    <NewsArticleWrapper
      containerheight={useContainerMinHeight()}
    >
      NewsArticle
    </NewsArticleWrapper>
  )
}

export default NewsArticle