import { Helmet } from 'react-helmet-async';
import config from '../../../config';

const Head = () => {
  return (
    <Helmet>
      <title>Our Brands</title>
      <meta name="description" content="Discover our visionary brands and their contributions towards sustainable innovation and development." />
      <meta name="keywords" content="Vishwa Brahmand, brands, vision, mission, leadership, allies, key documents, sustainable innovation, development" />
      
      <meta property="og:title" content="Vishwa Brahmand - Our Brands" />
      <meta property="og:description" content="Discover our visionary brands and their contributions towards sustainable innovation and development." />
      <meta property="og:image" content={`${config.publicUrl}/opengraph/brands/image.jpg`} /> {/* Replace with the URL of your image */}
      <meta property="og:url" content={`${config.publicUrl}/brands`} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Vishwa Brahmand - Our Brands" />
      <meta name="twitter:description" content="Discover our visionary brands and their contributions towards sustainable innovation and development." />
      <meta name="twitter:image" content={`${config.publicUrl}/opengraph/brands/twitter.jpg`} /> {/* Replace with the URL of your image */}
    </Helmet>
  );
};

export default Head;
