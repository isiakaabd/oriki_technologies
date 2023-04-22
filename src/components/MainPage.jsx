import { Container, Grid } from "@mui/material";
import { Header, Footer } from ".";
import { Outlet } from "react-router-dom";
import { ContactPhone } from "@mui/icons-material";

const MainPage = () => {
  return (
    <Grid
      item
      container
      flexDirection={"column"}
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
