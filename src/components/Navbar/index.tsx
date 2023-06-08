import { useEffect, useState } from 'react';
import { AppBar as MuiAppBar, Box, styled, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import NavbarButton from './NavbarButton';
import Logo from '../../Assets/Logo';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  justifyContent: 'center',
  height: theme.customHeights.navBarHeight,
  position: 'sticky',
  borderBottom: '1px solid rgba(0, 0, 0, 0.025)',
  transition: 'border-color 0.3s ease',
  '&.scrolled': {
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
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

const Navbar = () => {
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentWrapper = document.getElementById('content-wrapper');
      if (contentWrapper) {
        setIsScrolled(contentWrapper.scrollTop > 1);
      }
    };

    const contentWrapper = document.getElementById('content-wrapper');
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
    <AppBar className={isScrolled ? 'scrolled' : ''}>
      <ThemedToolbar>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
        <Box className="nav__panel">
          <NavbarButton to="/company">Company</NavbarButton>
          <NavbarButton to="/brands">Brands</NavbarButton>
          <NavbarButton to="/press">Press</NavbarButton>
        </Box>
      </ThemedToolbar>
    </AppBar>
  );
};

export default Navbar;
