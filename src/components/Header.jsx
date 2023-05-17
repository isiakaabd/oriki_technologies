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
import { motion, useCycle } from "framer-motion";

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
    route: "# ",
  },
];

function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    toggleOpen();
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    toggleOpen();
  };
  const variants = {
    open: {
      transition: { staggerChildren: 0.8, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const variantsLi = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      color="secondary"
      sx={{ height: "max-content", py: 1, background: "transparent" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ px: { xs: 0, md: 4 } }}>
          <Avatar
            component={Link}
            to="/"
            src={logo}
            sx={{
              width: { xs: "18rem", sm: "18rem", md: "25vw" },
              "& img": { objectFit: "contain" },
              mr: "auto",
            }}
            variant="square"
          />

          <Box sx={{ ml: "auto", display: { xs: "flex", sm: "none" } }}>
            <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
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

              <motion.ul variants={variants}>
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
                    <motion.li
                      variants={variantsLi}
                      whileHover={{ scale: 0.95 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MenuItem
                        key={page.route}
                        onClick={handleCloseNavMenu}
                        component={Link}
                        to={page.route}
                        disableTouchRipple
                        disableRipple
                      >
                        <Typography
                          sx={{
                            fontSize: "1.6rem",
                            width: "100%",
                            fontWeight: 500,
                          }}
                        >
                          {page.name}
                        </Typography>
                      </MenuItem>
                    </motion.li>
                  ))}
                </Menu>
              </motion.ul>
            </motion.nav>
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
                  textTransform: "capitalize",
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
