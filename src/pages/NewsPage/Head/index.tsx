import { Helmet } from 'react-helmet-async';
import config from '../../../config';
import { NewsCard } from '../../../__mocks__/pages/newspage';

interface HeadProps {
  newsArticles?: NewsCard[];
}

const Head = ({ newsArticles }: HeadProps) => {
  const headlines = newsArticles?.map((article) => article.headline) || [];
  const images = newsArticles?.map((article) => article.image) || [];
  const pubDates = newsArticles?.map((article) => article.pubDate) || [];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${config.publicUrl}/news`
    },
    "headline": headlines.length > 0 ? headlines : "Vishwa Brahmand - Recent News",
    "image": images.length > 0 ? images : [`${config.publicUrl}/opengraph/news/image.jpg`],
    "datePublished": pubDates.length > 0 ? pubDates : "2021-05-01T12:00:00+08:00",
    "dateModified": pubDates.length > 0 ? pubDates : "2021-05-01T12:00:00+08:00",
    "author": {
      "@type": "Organization",
      "name": "Vishwa Brahmand"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vishwa Brahmand",
      "logo": {
        "@type": "ImageObject",
        "url": `${config.publicUrl}/logo.svg`
      }
    },
    "description": "Stay updated with the recent news articles about Vishwa Brahmand, covering topics on innovation, development, and their impact on society."
  };

  return (
    <Helmet>
      <title>Recent News</title>
      <meta name="description" content="Stay updated with the recent news articles about Vishwa Brahmand, covering topics on innovation, development, and their impact on society." />
      <meta name="keywords" content="Vishwa Brahmand, news, recent news, organization, updates, articles, society, innovation, development" />

      <meta property="og:title" content="Vishwa Brahmand - Recent News" />
      <meta property="og:description" content="Stay updated with the recent news articles about Vishwa Brahmand, covering topics on innovation, development, and their impact on society." />
      <meta property="og:image" content={`${config.publicUrl}/opengraph/news/image.jpg`} /> {/* Replace with the URL of your image */}
      <meta property="og:url" content={`${config.publicUrl}/news`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Vishwa Brahmand - Recent News" />
      <meta name="twitter:description" content="Stay updated with the recent news articles about Vishwa Brahmand, covering topics on innovation, development, and their impact on society." />
      <meta name="twitter:image" content={`${config.publicUrl}/opengraph/news/twitter.jpg`} /> {/* Replace with the URL of your image */}

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default Head;
