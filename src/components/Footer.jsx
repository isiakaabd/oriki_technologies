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

const options = [
  {
    name: "Cheers",
    link: "#",
  },
  {
    name: "Oriki",
    link: "#",
  },
];
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
            <Grid item container flexDirection={"column"}>
              <Grid
                item
                container
                sx={{
                  display: { xs: "grid", md: "flex" },
                  gap: { md: "3rem", xs: "1.5rem" },
                  justifyContent: "space-between",
                  gridTemplateColumns: "1fr 1fr",
                  flexWrap: { md: "nowrap", xs: "wrap" },
                }}
              >
                <Grid item>
                  <Avatar
                    src={logo2}
                    variant="square"
                    sx={{
                      width: { xs: "100%", md: "10rem" },
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
                <Grid item>
                  <Typography variant="h4" fontWeight={800} color="primary">
                    About Us
                  </Typography>
                  <List>
                    <ListItem disableGutters dense>
                      <ListItemText
                        primaryTypographyProps={text}
                        primary="Services"
                      />
                    </ListItem>
                    <ListItem disableGutters dense>
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

                <Grid item>
                  <Typography variant="h4" fontWeight={800} color="primary">
                    Our Products
                  </Typography>
                  <List>
                    <ListItem disableGutters dense>
                      <ListItemText
                        primaryTypographyProps={text}
                        primary="Cheers"
                      />
                    </ListItem>
                    <ListItem disableGutters dense>
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
                <Grid item>
                  <Typography variant="h4" fontWeight={800} color="primary">
                    Join Us
                  </Typography>
                  <List>
                    <ListItem disableGutters dense>
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
