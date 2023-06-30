import { Box, BoxProps, styled } from '@mui/material';
import Content from './Content';
import ArticleCTA from './ArticleCTA';
import {
  useSvgComponentDimensions as useGetDimension
} from '../../../utils/useSvgComponentDimensions';
import { NewsCard } from '../../../__mocks__/pages/presspage';
import { useState } from 'react';

interface ArticleBodyWrapperProps extends BoxProps {
  navpanelwidth?: number;
};

const ArticleBodyWrapper = styled(Box)<ArticleBodyWrapperProps>(({ theme, navpanelwidth }) => ({
  ...theme.bodyProps,
  paddingTop: 0,
  width: '100%',
  display: 'grid',
  gridTemplateColumns: navpanelwidth ? `1fr ${navpanelwidth}px` : '1fr',
  alignItems: 'start',
  justifyContent: 'space-between',
  margin: 0,
  position: 'relative',
  gap: theme.customSpaces.md,
}));

const ArticleBody = (
  {
    contentLink,
    downlodable
  }: {
    contentLink?: NewsCard['contentLink'];
    downlodable?: NewsCard['downlodable'];
  }
) => {

  const navPanelWidth = useGetDimension('nav__panel').width;

  const [contentLoading, setContentLoading] = useState(true);
  console.log('contentLoading:', contentLoading);

  return (
    <ArticleBodyWrapper
      id='article-body'
      navpanelwidth={navPanelWidth}
    >
      <Content contentLink={contentLink} setContentLoading={setContentLoading} />
      {
        !contentLoading &&
        <ArticleCTA downlodable={downlodable} />
      }
    </ArticleBodyWrapper>
  )
}

export default ArticleBody