import { Helmet, HelmetProvider } from 'react-helmet-async';
import { I18nextProvider as LocaleProvider } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import ReactGA from "react-ga4";

import Navbar from './components/Navbar';
import CompanyPage from './pages/CompanyPage';
import HomePage from './pages/HomePage';
import BrandsPage from './pages/BrandsPage';
import NewsPage from './pages/NewsPage';
import Footer from './components/Footer';
import CursorLocationProvider from './components/common/cursorLocationProvider';
import ContentWrapper from './components/ContentWrapper';
import NewsArticle from './template/NewsArticle';
import Page404 from './pages/Page404';
import ScrollBarWrapper from './components/scrollbar';

import i18n from './i18n';
import config from './config';

/* google tag manager in production */
if (process.env.NODE_ENV === 'production') {
  const gAnanlyticsID: string = process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT_ID as string;
  ReactGA.initialize(gAnanlyticsID);
}

const Router = () => {
  return (
    <HelmetProvider>
      <LocaleProvider i18n={i18n}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <CursorLocationProvider />
            <ScrollBarWrapper>
              <Navbar />
              <ContentWrapper>
                <Helmet>
                  <link rel="canonical" href={config.publicUrl} />
                  <link rel="company" href={`${config.publicUrl}/company`} />
                  <link rel="company" href={`${config.publicUrl}/brands`} />
                  <link rel="company" href={`${config.publicUrl}/news`} />
                </Helmet>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/company" element={<CompanyPage />} />
                  <Route path="/brands" element={<BrandsPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/news/:articleId" element={<NewsArticle />} />
                  <Route path="*" element={<Page404 />} />
                </Routes>
                <Footer />
              </ContentWrapper>
            </ScrollBarWrapper>
          </ThemeProvider>
        </BrowserRouter>
      </LocaleProvider>
    </HelmetProvider>
  );
};

export default Router;
