import { AppBar, Box, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";
import NavbarButton from "./NavbarButton";
import Logo from "../../Assets/Logo";

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const Navbar = () => {

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <StyledLink to="/">
            <Logo />
          </StyledLink>
        </Box>
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
