import { useState } from 'react';
import { AppBar as MuiAppBar, Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import NavbarButton from './NavbarButton';
import Logo from '../../Assets/Logo';
import HamburgerMenu from './HamburgerMenu';
import useIsScrolled from '../../utils/useIsScrolled';
import { useTranslation } from 'react-i18next';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  justifyContent: 'center',
  alignItems: 'center',
  height: theme.customHeights.navBarHeight,
  position: 'sticky',
  transition: 'border-color 0.3s ease',
  zIndex: 5,
  
  
  [theme.breakpoints.down('md')]: {
    margin: 0,
    padding: `0 ${theme.customPadding.sm}`,
  },
}));

const AppbarBackground = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: theme.customHeights.navBarHeight,
  position: 'absolute',
  zIndex: -1,
  backgroundColor: theme.customColors.white,
  borderBottom: `1px solid rgba(0, 0, 0, 0.025)`,
  transition: 'border-color 0.3s ease',
  '&.scrolled': {
    borderBottom: `1px solid ${theme.customColors.lightBorder}`,
  },
}));

const StyledLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
});

const ThemedToolbar = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.customSpaces.md,
}));

export const NavPanel = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between !important',
  gap: theme.customSpaces.md,
  minWidth: '20em',
  [theme.breakpoints.down('md')]: {
    display: 'none !important',
  },
}));

const Navbar = () => {

  const isScrolled = useIsScrolled();
  const [open, setOpen] = useState(false);
  const {t} = useTranslation();

  return (
    <AppBar >
      <AppbarBackground className={`noselect ${isScrolled ? 'scrolled' : ''}`}/>
      <ThemedToolbar>
        <StyledLink
          to="/"
          onClick={() => open && setOpen(!open)}
        >
          <Logo />
        </StyledLink>
        <NavPanel 
          className="nav__panel"
          id='nav__panel'
        >
          <NavbarButton to="/company">{t('__NAVBAR_COMPANY')}</NavbarButton>
          <NavbarButton to="/brands">{t('__NAVBAR_BRANDS')}</NavbarButton>
          <NavbarButton to="/news">{t('__NAVBAR_NEWS')}</NavbarButton>
        </NavPanel>
        <HamburgerMenu open={open} setOpen={setOpen} />
      </ThemedToolbar>
    </AppBar>
  );
};

export default Navbar;
