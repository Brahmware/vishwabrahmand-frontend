import { styled, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { Link, useMatch } from 'react-router-dom';

const NavLink = styled(Link)(({ theme }) => ({
  ...theme.textSelectionVarient.varient_bhashma_on_white,
  color: theme.customColors.bhasma,
  backgroundColor: theme.customColors.white,
  textTransform: 'none',
  fontWeight: theme.customWeight.navbar,
  fontSize: theme.customSizes.navbar,
  textDecoration: 'none',
  transition: 'color 0.3s ease-in-out',

  '&:hover': {
    color: theme.customColors.matmaila,
  }
}));

const NavbarButton = ({
  to,
  children
}: {
  to: string,
  children: ReactNode
}) => {
  const theme = useTheme();
  const match = useMatch(to);
  const isActive = match !== null;

  return (
    <NavLink
      to={to}
      sx={isActive ?
        {
          color: theme.customColors.rakthalal,
          '&:hover': {
            color: theme.customColors.rakthalal,
          },
        } : {}
      }
    >
      {children}
    </NavLink>
  )
}

export default NavbarButton;
