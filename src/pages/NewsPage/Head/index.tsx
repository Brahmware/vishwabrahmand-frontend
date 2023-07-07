import { Helmet } from 'react-helmet-async';
import config from '../../../config';

const Head = () => {
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
    </Helmet>
  );
};

export default Head;
