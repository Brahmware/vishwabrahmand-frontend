import { Box, IconButton, styled } from '@mui/material';
import { BoxProps } from '@mui/system';
import { Fragment, useState } from 'react';
import NavbarButton from './NavbarButton';
import { Twirl as HamburgerIcon } from 'hamburger-react';

interface MenuNavListProps extends BoxProps {
  open?: boolean;
};

const HamburgerIconButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  border: `3.5px solid ${theme.customColors.bhasma}`,
  backgroundColor: theme.customColors.white,
  color: theme.customColors.bhasma,
  padding: '0.25em',
  transform: 'scale(70%) translateX(30%)',
  transition: `all ${theme.timing.short}ms ease`,

  '&:hover': {
    backgroundColor: theme.customColors.white,
    border: `3.5px solid ${theme.customColors.rakthalal}`,
    color: theme.customColors.rakthalal,
  },

  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },

}));

const MenuNavList = styled(Box)<MenuNavListProps>(({ theme, open }) => ({
  display: 'flex',
  width: '100%',
  position: 'absolute',
  top: theme.customHeights.navBarHeight,
  alignItems: 'start',
  justifyContent: 'center',
  gap: theme.customSpaces.md,
  padding: open ? `${theme.customPadding.sm} ${theme.customPadding.md}` : 0,
  borderBottom: open ? `1px solid ${theme.customColors.lightBorder}` : 0,
  backgroundColor: `${theme.customColors.white}aa`,
  color: theme.customColors.bhasma,
  backdropFilter: 'blur(5px)',
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
    display: 'none !important',
  },
}));

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <HamburgerIconButton
        onClick={handleClick}
        aria-label="menu"
        aria-controls="menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableRipple
      >
        <HamburgerIcon 
          size={32}
          distance='sm'
          easing='ease-in'
          toggled={open}
        />
      </HamburgerIconButton>

      <MenuNavList className="nav__panel" open={open}>
        <NavbarButton to="/company">Company</NavbarButton>
        <NavbarButton to="/brands">Brands</NavbarButton>
        <NavbarButton to="/press">Press</NavbarButton>
      </MenuNavList>
    </Fragment>
  );
};

export default HamburgerMenu;
