import { Box, styled } from '@mui/material';
import { useAddRootClass } from '../../utils/useAddRootClass';
import ArticleHead from './ArticleHead';
import ArticleBody from './ArticleBody';
import { useParams } from 'react-router-dom';
import { NewsCard, getSpecificNewsRelease } from '../../__mocks__/pages/newspage';
import { Fragment, useEffect, useState } from 'react';
import RecentArticles from './RecentArticles';
import Head from './Head';

const NewsArticleWrapper = styled(Box)(({ theme }) => ({
  ...theme.bodyProps,
  padding: 0,
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: theme.customSpaces.xl,

  '& *': {
    lineHeight: '1.33 !important',
  },
}));


const NewsArticle = () => {

  useAddRootClass('news-article');

  const { articleId } = useParams();

  const [article, setArticle] = useState({} as NewsCard);

  useEffect(() => {
    const getArticle = async () => {
      try {
        const article = await getSpecificNewsRelease(articleId || '');
        setArticle(article);
      } catch (error) {
        console.log(error);
      }
    }
    getArticle();
  }, [articleId]);

  return (
    <Fragment>
      <Head article={article} />
      <NewsArticleWrapper as='article'>
        <ArticleHead
          headline={article.headline}
          pubDate={article.pubDate}
          headerImage={article.image}
        />
        <ArticleBody
          contentLink={article.contentLink}
          downlodable={article.downlodable}
        />
        <RecentArticles />
      </NewsArticleWrapper>
    </Fragment>
  )
}

export default NewsArticle