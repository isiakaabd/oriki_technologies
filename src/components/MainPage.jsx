import { Grid } from "@mui/material";
import { Header, Footer } from ".";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <Grid item sx={{ height: "100%" }}>
      <Header />
      <Grid item container sx={{ px: 2, height: "100%" }}>
        <Outlet />
      </Grid>

      <Footer />
    </Grid>
  );
};

export default MainPage;
