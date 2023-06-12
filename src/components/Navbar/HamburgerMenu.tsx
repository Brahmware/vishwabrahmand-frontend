import { Box, IconButton, styled, useTheme } from '@mui/material';
import { BoxProps } from '@mui/system';
import { Fragment, useState } from 'react';
import NavbarButton from './NavbarButton';
import { Spin as HamburgerIcon } from 'hamburger-react';
import { useWindowHeight } from '../../utils/useWindowHeight';

interface MenuNavListProps extends BoxProps {
  open?: boolean;
  windowheight?: number;
};

const HamburgerIconButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  backgroundColor: theme.customColors.white,
  color: theme.customColors.bhasma,
  padding: 0,
  transition: `all ${theme.timing.short}ms ease`,

  '&:hover': {
    backgroundColor: theme.customColors.white,
    color: theme.customColors.rakthalal,
  },

  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },

}));

const MenuNavList = styled(Box)<MenuNavListProps>(({ theme, open, windowheight }) => ({
  display: 'flex',
  width: '100%',
  position: 'absolute',
  left: 0,
  right: 0,
  top: theme.customHeights.navBarHeight,
  alignItems: 'start',
  justifyContent: 'center',
  gap: theme.customSpaces.md,
  padding: open ? `${theme.customPadding.sm} ${theme.customPadding.md}` : 0,
  borderBottom: open ? `1px solid ${theme.customColors.lightBorder}` : 0,
  backgroundColor: `${theme.customColors.white}dd`,
  color: theme.customColors.bhasma,
  backdropFilter: 'blur(10px)',
  overflow: 'hidden',
  height: open ? theme.customHeights.navPanelHeight : 0,
  transition: `
    all ${theme.timing.short}ms ease-in,
    border ${theme.timing.short}ms ease-in
  `,

  [theme.breakpoints.up('md')]: {
    display: 'none !important',
  },

  [theme.breakpoints.down('sm')]: {
    height: open ? `calc(${windowheight}px - ${theme.customHeights.navBarHeight})` : 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.customSpaces.lg,
  },
}));

const HamburgerMenu = () => {

  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const windowHeight = useWindowHeight();

  console.log(windowHeight);

  return (
    <Fragment>
      <HamburgerIconButton
        aria-label="menu"
        aria-controls="menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <HamburgerIcon
          rounded
          size={25}
          distance='sm'
          easing='ease-in'
          toggled={open}
          onToggle={ toggled => toggled ? setOpen(true) : setOpen(false)}
          label='Show menu'
          color={
            open ? 
            theme.customColors.rakthalal: 
            theme.customColors.bhasma
          }
        />
      </HamburgerIconButton>

      <MenuNavList
        className="nav__panel"
        open={open}
        windowheight={windowHeight}
      >
        <NavbarButton to="/company">Company</NavbarButton>
        <NavbarButton to="/brands">Brands</NavbarButton>
        <NavbarButton to="/press">Press</NavbarButton>
      </MenuNavList>
    </Fragment>
  );
};

export default HamburgerMenu;
