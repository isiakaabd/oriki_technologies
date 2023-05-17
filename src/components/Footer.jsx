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
import { Link } from "react-router-dom";

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
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Grid
              item
              container
              flexDirection={"column"}
              sx={{ px: { xs: 0, md: 4 } }}
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
                        primary="Services"
                      />
                    </ListItem>
                    <ListItem
                      disableGutters
                      dense
                      component={Link}
                      to="#"
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
                      component={Link}
                      to="#"
                      sx={{ font: "inherit", color: "inherit" }}
                    >
                      <ListItemText
                        primaryTypographyProps={text}
                        primary="Cheers"
                      />
                    </ListItem>
                    <ListItem
                      disableGutters
                      dense
                      component={Link}
                      to="#"
                      sx={{ font: "inherit", color: "inherit" }}
                    >
                      <ListItemText
                        primaryTypographyProps={text}
                        primary="Oriki Lorem"
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
                Copyright © 2023 Cheers
              </Typography>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
}
