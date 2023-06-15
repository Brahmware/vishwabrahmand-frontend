import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, styled } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import CompanyPage from './pages/CompanyPage';
import HomePage from './pages/HomePage';
import BrandsPage from './pages/BrandsPage';
import PressPage from './pages/PressPage';
import Footer from './components/Footer';
import CursorLocationProvider from './components/common/cursorLocationProvider';
import ContentWrapper from './components/ContentWrapper';

const Router = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CursorLocationProvider />
        <Navbar />
        <ContentWrapper >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/press" element={<PressPage />} />
          </Routes>
          <Footer />
        </ContentWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
