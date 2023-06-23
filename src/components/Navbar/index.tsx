import { useEffect, useState } from 'react';
import { AppBar as MuiAppBar, Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import NavbarButton from './NavbarButton';
import Logo from '../../Assets/Logo';
import HamburgerMenu from './HamburgerMenu';
import useIsScrolled from '../../utils/useIsScrolled';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  justifyContent: 'center',
  height: theme.customHeights.navBarHeight,
  position: 'sticky',
  borderBottom: `1px solid ${theme.customColors.lightBorder}`,
  transition: 'border-color 0.3s ease',
  zIndex: 5,

  [theme.breakpoints.down('md')]: {
    margin: 0,
    padding: `0 ${theme.customPadding.sm}`,
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
  
  const isScrolled = useIsScrolled();
  const [open, setOpen] = useState(false);

  return (
    <AppBar className={isScrolled ? 'scrolled noselect' : 'noselect'}>
      <ThemedToolbar>
        <StyledLink 
          to="/"
          onClick={() => setOpen(!open)}
        >
          <Logo />
        </StyledLink>
        <NavPanel className="nav__panel">
          <NavbarButton to="/company">Company</NavbarButton>
          <NavbarButton to="/brands">Brands</NavbarButton>
          <NavbarButton to="/press">Press</NavbarButton>
        </NavPanel>
        <HamburgerMenu open={open} setOpen={setOpen} />
      </ThemedToolbar>
    </AppBar>
  );
};

export default Navbar;
