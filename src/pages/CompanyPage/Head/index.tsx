import { Helmet } from 'react-helmet-async';
import config from '../../../config';

const Head = () => {
  return (
    <Helmet>
      <title>About Our Company</title>
      <meta name="description" content="Know more about Vishwa Brahmand and its mission to empower humanity towards sustainable innovation and development." />
      <meta name="keywords" content="vision, mission, leadership, allies, key documents" />
      
      <meta property="og:title" content="Vishwa Brahmand - Empowering Innovation and Development" />
      <meta property="og:description" content="Empowering humanity towards sustainable innovation and development." />
      <meta property="og:image" content={`${config.publicUrl}/opengraph/home/image.jpg`} /> {/* Replace with the URL of your image */}
      <meta property="og:url" content={config.publicUrl} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Vishwa Brahmand - Empowering Innovation and Development" />
      <meta name="twitter:description" content="Empowering humanity towards sustainable innovation and development." />
      <meta name="twitter:image" content={`${config.publicUrl}/opengraph/home/twitter.jpg`} /> {/* Replace with the URL of your image */}
    </Helmet>
  )
}

export default Head