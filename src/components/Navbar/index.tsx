import { AppBar, Box, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";
import NavbarButton from "./NavbarButton";
import Logo from "../../Assets/Logo";

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
    <AppBar position="sticky" sx={{justifyContent: 'center'}}>
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
