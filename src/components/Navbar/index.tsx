import { useEffect, useState } from 'react';
import { AppBar as MuiAppBar, Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import NavbarButton from './NavbarButton';
import Logo from '../../Assets/Logo';
import HamburgerMenu from './HamburgerMenu';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  justifyContent: 'center',
  height: theme.customHeights.navBarHeight,
  position: 'sticky',
  borderBottom: `1px solid ${theme.customColors.lightBorder}`,
  transition: 'border-color 0.3s ease',
  zIndex: 5,

  [theme.breakpoints.down('md')]: {
    margin: 0,
  },
}));

const StyledLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
});

const ThemedToolbar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.customSpaces.md,
}));

export const NavPanel = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.customSpaces.md,
  [theme.breakpoints.down('md')]: {
    display: 'none !important',
  },
}));

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentWrapper = document.getElementById('root');
      if (contentWrapper) {
        setIsScrolled(contentWrapper.scrollTop > 1);
      }
    };

    const contentWrapper = document.getElementById('root');
    if (contentWrapper) {
      contentWrapper.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contentWrapper) {
        contentWrapper.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <AppBar className={isScrolled ? 'scrolled noselect' : 'noselect'}>
      <ThemedToolbar>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
        <NavPanel className="nav__panel">
          <NavbarButton to="/company">Company</NavbarButton>
          <NavbarButton to="/brands">Brands</NavbarButton>
          <NavbarButton to="/press">Press</NavbarButton>
        </NavPanel>
        <HamburgerMenu />
      </ThemedToolbar>
    </AppBar>
  );
};

export default Navbar;
