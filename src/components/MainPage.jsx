import { Grid } from "@mui/material";
import { Header, Footer } from ".";
import { Outlet, useLocation } from "react-router-dom";
import { O, O2 } from "@assets/index";
import { useState } from "react";
const MainPage = () => {
  return (
    <Grid item container flexDirection={"column"}>
      <Header />

      <Grid
        item
        sx={{
          height: "100%",
          minHeight: "100vh",
          // url(img_flwr.gif) right bottom no-repeat
          // background:
          //   location.pathname === "/"
          //     ? ` url(${O2}) right 90vh no-repeat `
          //     : null,
          //  url(${O}) -50px bottom no-repeat,
        }}
      >
        <Outlet />
      </Grid>

      <Footer />
    </Grid>
  );
};

export default MainPage;
