import { Helmet } from 'react-helmet-async';
import { NewsCard } from '../../../__mocks__/pages/newspage';
import config from '../../../config';

interface HeadProps {
  article: NewsCard;
}

const Head: React.FC<HeadProps> = ({ article }) => {
  return (
    <Helmet>
      <title>{article.headline}</title>
      <meta name="description" content={article.headline} />
      <meta name="keywords" content="Vishwa Brahmand, news, article" />

      <meta property="og:title" content={article.headline} />
      <meta property="og:description" content={article.headline} />
      <meta property="og:image" content={article.image} />
      <meta property="og:url" content={`${config.publicUrl}/news/${article.id}`} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={article.headline} />
      <meta name="twitter:description" content={article.headline} />
      <meta name="twitter:image" content={article.image} />
    </Helmet>
  );
};

export default Head;
