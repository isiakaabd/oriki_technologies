import {
  MenuItem,
  Button,
  Avatar,
  Container,
  AppBar,
  Menu,
  Box,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { logo } from "@assets";

const pages = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: " Our Products",
    route: "/products",
  },
  {
    name: "Join Us",
    route: "/join ",
  },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      color="secondary"
      sx={{ height: "max-content", py: 1, background: "transparent" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Avatar
            component={Link}
            to="/"
            src={logo}
            sx={{
              width: { xs: "15rem", sm: "18rem", md: "20rem" },
              "& img": { objectFit: "contain" },
              mr: "auto",
            }}
            variant="square"
          />

          <Box sx={{ ml: "auto", display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon
                sx={{ fontSize: "3rem", color: "#18B067" }}
                color="main"
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.route}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.route}
                >
                  <Typography
                    textAlign="center"
                    sx={{ fontSize: "1.6rem", fontWeight: 500 }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box gap={4} sx={{ display: { xs: "none", sm: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.route}
                component={Link}
                to={page.route}
                color="secondary"
                sx={{
                  fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.9rem" },
                  display: "block",
                  fontWeight: 600,
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
