import { Helmet } from 'react-helmet-async';
import { NewsCard } from '../../../__mocks__/pages/newspage';
import config from '../../../config';

interface HeadProps {
  article: NewsCard;
}

const Head: React.FC<HeadProps> = ({ article }) => {

  const keywords = article.keywords ? article.keywords.join(', ') : 'Vishwa Brahmand, news, article';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${config.publicUrl}/news/${article.id}`,
    },
    headline: article.headline,
    keywords,
    image: [article.image],
    datePublished: article.pubDate,
    dateModified: article.pubDate,
    author: {
      '@type': 'Organization',
      name: 'Vishwa Brahmand',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vishwa Brahmand',
      logo: {
        '@type': 'ImageObject',
        url: `${config.publicUrl}/logo.svg`,
      },
    },
    description: article.headline,
  };

  return (
    <Helmet>
      <title>{`Vishwa Brahmand | ${article.headline}`}</title>
      <meta name="description" content={article.headline} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={article.headline} />
      <meta property="og:description" content={article.headline} />
      <meta property="og:image" content={article.image} />
      <meta property="og:url" content={`${config.publicUrl}/news/${article.id}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={article.headline} />
      <meta name="twitter:description" content={article.headline} />
      <meta name="twitter:image" content={article.image} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default Head;
