import { Helmet } from 'react-helmet-async';

const Head = () => {
  return (
    <Helmet>
      <title>Page Not Found</title>
      <meta name="description" content="The page you are looking for could not be found." />
    </Helmet>
  );
};

export default Head;
