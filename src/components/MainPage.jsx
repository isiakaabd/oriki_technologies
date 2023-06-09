import { Grid } from "@mui/material";
import { Header, Footer } from ".";
import { Outlet, useLocation } from "react-router-dom";
import { O, O2 } from "@assets/index";

const MainPage = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Grid
      item
      container
      flexDirection={"column"}
      // gap={"4rem"}
      backgroundImage
    >
      <Header />
      <Grid
        item
        sx={{
          height: "100%",
          minHeight: "100vh",
          // url(img_flwr.gif) right bottom no-repeat
          background:
            location.pathname === "/"
              ? ` url(${O}) -50px bottom no-repeat, url(${O2}) right 90vh no-repeat `
              : null,
        }}
      >
        <Outlet />
      </Grid>

      <Footer />
    </Grid>
  );
};

export default MainPage;
