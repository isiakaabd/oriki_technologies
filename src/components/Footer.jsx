import {
  AppBar,
  Grid,
  List,
  Avatar,
  ListItemText,
  ListItem,
  CssBaseline,
  Container,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import Socials from "./Socials";
import { Fragment } from "react";
import { logo2 } from "@assets/index";
import { Link, useNavigate } from "react-router-dom";

// const options = [
//   {
//     name: "Cheers",
//     link: "#",
//   },
//   {
//     name: "Oriki",
//     link: "#",
//   },
// ];
const text = {
  fontSize: "clamp(1.4rem,2vw,1.85rem)",
  fontWeight: 500,
};

export default function Footer() {
  const navigate = useNavigate();

  function scrollToTopAndNavigate(link) {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scroll smooth
    });

    if (link !== "/") {
      setTimeout(() => {
        navigate(link);
      }, 0);
    }
  }

  return (
    <Fragment>
      <CssBaseline />

      <AppBar
        position="relative"
        component={"footer"}
        color="info"
        sx={{
          top: "auto",
          bottom: 0,
          mt: "auto",
          py: 4,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid
              item
              container
              flexDirection={"column"}
              sx={{ px: { xs: 0, md: 5 }, pt: { md: 3 }, pb: { md: 5 } }}
            >
              <Grid
                item
                container
                sx={{
                  display: { xs: "grid", md: "flex" },
                  gap: { md: "1.5rem", xs: "1.5rem" },
                  justifyContent: "space-between",
                  gridTemplateColumns: "1fr 1fr",
                  flexWrap: { md: "nowrap", xs: "wrap" },
                }}
              >
                <Grid item flex={1}>
                  <Avatar
                    src={logo2}
                    variant="square"
                    sx={{
                      width: "100%",
                      height: "100%",
                      "& img": { objectFit: "contain" },
                    }}
                  />

                  {/* <Socials /> */}
                </Grid>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ display: { xs: "none", md: "block" } }}
                />
                <Grid item flex={1}>
                  <Typography variant="h4" fontWeight={800} color="primary">
                    About Us
                  </Typography>
                  <List dense>
                    <ListItem
                      disableGutters
                      dense
                      component={Link}
                      to="#"
                      sx={{ font: "inherit", color: "inherit" }}
                    >
                      <ListItemText
                        primaryTypographyProps={text}
                        primary="Services"
                      />
                    </ListItem>
                    <ListItem
                      disableGutters
                      dense
                      component={Link}
                      to="mailto:hello@orikitechnologies.com"
                      sx={{ font: "inherit", color: "inherit" }}
                    >
                      <ListItemText
                        primaryTypographyProps={text}
                        primary="Contact Us"
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ display: { xs: "none", md: "block" } }}
                />

                <Grid item flex={1}>
                  <Typography variant="h4" fontWeight={800} color="primary">
                    Our Products
                  </Typography>
                  <List>
                    <ListItem
                      disableGutters
                      dense
                      // component={Link}
                      onClick={() => scrollToTopAndNavigate("/products")}
                      sx={{ font: "inherit", color: "inherit" }}
                    >
                      <ListItemText
                        primaryTypographyProps={text}
                        primary="Cheers"
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ display: { xs: "none", md: "block" } }}
                />
                <Grid item flex={1}>
                  <Typography variant="h4" fontWeight={800} color="primary">
                    Join Us
                  </Typography>
                  <List>
                    <ListItem
                      disableGutters
                      dense
                      component={Link}
                      to="#"
                      sx={{ font: "inherit", color: "inherit" }}
                    >
                      <ListItemText
                        primaryTypographyProps={text}
                        primary="Career at Oriki"
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ display: { xs: "none", md: "block" } }}
                />
                <Grid item gridColumn={"1/3"}>
                  <Typography
                    variant="h4"
                    fontWeight={800}
                    color="primary"
                    textAlign={"center"}
                    width={"100%"}
                  >
                    Connect with Us
                  </Typography>
                  <Grid item container sx={{ py: 4 }}>
                    <Socials />
                  </Grid>
                </Grid>
              </Grid>
              <Typography
                variant="h5"
                sx={{ width: "100%", py: 4, textAlign: "center" }}
              >
                Copyright © {new Date().getFullYear()} Cheers
              </Typography>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
}
