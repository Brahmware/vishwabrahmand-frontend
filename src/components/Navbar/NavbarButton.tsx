import { styled, useMediaQuery, useTheme } from '@mui/material';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Link, useMatch } from 'react-router-dom';

const NavLink = styled(Link)(({ theme }) => ({
  ...theme.textSelectionVarient.varient_bhashma_on_white,
  color: theme.customColors.bhasma,
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
  menuToggleFn,
  menuToggleState,
  children,
}: {
  to: string,
  menuToggleFn?: Dispatch<SetStateAction<boolean>>,
  menuToggleState?: boolean,
  children: ReactNode,
}) => {
  const theme = useTheme();
  const match = useMatch(to);
  const isActive = match !== null;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <NavLink
      className='cursor-pointer'
      to={to}
      sx={isActive ?
        {
          color: theme.customColors.rakthalal,
          '&:hover': {
            color: theme.customColors.rakthalal,
          },
        } : {}
      }
      onClick={() => {
        if(isMobile) {
          menuToggleFn && menuToggleFn(!menuToggleState);
        }
      }}
    >
      {children}
    </NavLink>
  )
}

export default NavbarButton;
