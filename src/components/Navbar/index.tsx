import { AppBar as MuiAppBar, Box, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";
import NavbarButton from "./NavbarButton";
import Logo from "../../Assets/Logo";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  justifyContent: 'center',
  height: theme.customHeights.navBarHeight,
  position: 'sticky',
  borderBottom: `1px solid rgba(0,0,0, 0.1)`,
}));

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const ThemedToolbar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.customSpaces.md
}))

const Navbar = () => {

  return (
    <AppBar>
      <ThemedToolbar>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
        <Box className="nav__panel">
          <NavbarButton to="/company" >
            Company
          </NavbarButton>
          <NavbarButton to="/brands" >
            Brands
          </NavbarButton>
          <NavbarButton to="/press" >
            Press
          </NavbarButton>
        </Box>
      </ThemedToolbar>
    </AppBar>
  );
};

export default Navbar;
