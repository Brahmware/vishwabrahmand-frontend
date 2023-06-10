import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  IconButton,
  Menu,
  styled
} from '@mui/material';
import { Fragment, useState } from 'react';
import NavbarButton from './NavbarButton';

const HamburderIconButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  border: `2px solid ${theme.customColors.bhasma}`,
  backgroundColor: theme.customColors.white,
  color: theme.customColors.bhasma,
  padding: theme.customSpaces.xxs,
  transition: 'all 0.3s ease',
  zIndex: 2,

  '&:hover': {
    backgroundColor: theme.customColors.white,
    border: `2px solid ${theme.customColors.rakthalal}`,
    color: theme.customColors.rakthalal,
  },

  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}));

const ResponsiveMenu = styled(Menu)(({ theme }) => ({

  transform: 'translate(0.75em, -3.25em)',

  [theme.breakpoints.up('md')]: {
    display: 'none !important',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none !important',
  }
}));

const MenuContentWrapper = styled(Box)({
  height: '100%',
  width: '100%',
  position: 'relative',
  zIndex: 1
});

const MenuNavList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: theme.customSpaces.md,
  height: '20em',
  width: '16em',
  padding: `${theme.customPadding.sm} ${theme.customPadding.md}`,
  backgroundColor: theme.customColors.white,
  color: theme.customColors.bhasma,

}));

const HamburgerMenu = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <HamburderIconButton
        onClick={handleClick}
        aria-label="menu"
        aria-controls="menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <MenuIcon />
      </HamburderIconButton>
      <ResponsiveMenu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'menu' }}
        placeholder='Menu'
        elevation={2}
      >
        <MenuContentWrapper>
          <MenuNavList className="nav__panel">
            <NavbarButton to="/company">Company</NavbarButton>
            <NavbarButton to="/brands">Brands</NavbarButton>
            <NavbarButton to="/press">Press</NavbarButton>
          </MenuNavList>
        </MenuContentWrapper>
      </ResponsiveMenu>
    </Fragment>
  )
}

export default HamburgerMenu