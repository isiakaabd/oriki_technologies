import { Grid } from "@mui/material";
import { Header, Footer } from ".";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <Grid
      item
      container
      flexDirection={"column"}
      gap={"4rem"}
      sx={{ height: "100%", minHeight: "100vh" }}
    >
      <Header />
      <Grid item>
        <Outlet />
      </Grid>

      <Footer />
    </Grid>
  );
};

export default MainPage;
