import { Box, styled } from '@mui/material';
import { useAddRootClass } from '../../utils/useAddRootClass';
import ArticleHead from './ArticleHead';
import ArticleBody from './ArticleBody';
import RecentArticles from './ArticleBody/RecentArticles';
import { useParams } from 'react-router-dom';
import { NewsCard, getSpecificPressRelease } from '../../__mocks__/pages/presspage';
import { useEffect, useState } from 'react';

const NewsArticleWrapper = styled(Box)(({ theme }) => ({
  ...theme.bodyProps,
  padding: 0,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

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
        const article = await getSpecificPressRelease(articleId || '');
        setArticle(article);
      } catch (error) {
        console.log(error);
      }
    }
    getArticle();
  }, [articleId]);

  return (
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
  )
}

export default NewsArticle