import { cheers, img02 } from "@assets";
import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Grid
      item
      container
      sx={{
        height: { md: "calc(100vh - 120px)" },
        mb: "4rem",
        // py: "4rem",
        background: "rgba(217, 217, 217, 0.4)",
      }}
    >
      <Container maxWidth="lg" height="100%">
        <Grid
          item
          container
          gap={{ md: "4rem", xs: "2rem" }}
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ py: "2rem", height: "100%" }}
        >
          <Grid item flex={1} height="100%" order={{ md: 1, xs: 2 }}>
            <Grid item container flexDirection={"column"} height="100%">
              <Grid item mb={4}>
                <Avatar
                  src={cheers}
                  variant="square"
                  sx={{
                    width: "15rem",
                    height: "100%",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="h3"
                  color={"secondary"}
                  width={"100%"}
                  textAlign={"justify"}
                  gutterBottom
                >
                  With Cheers, birthdays mean a bit more than just a special
                  day. It’s achance to show people how much they mean to you and
                  how much you care; a way to experience birthdays as they are
                  truly meant to be, filled with love, thouthfulness and spirit.
                </Typography>
              </Grid>
              <Grid item mt="auto">
                <Button
                  variant="contained"
                  disableElevation
                  disableTouchRipple
                  target="_blank"
                  disableRipple
                  LinkComponent={Link}
                  to="https://cheers-new.netlify.app/"
                  color="info"
                  sx={{
                    padding: ".4em 2em",
                    color: "#E5E5E5",
                    fontWeight: 800,
                    borderRadius: ".7rem",
                    textDecoration: "underline",
                    textUnderlineOffset: "5px",
                    textTransform: "initial",
                    fontSize: "clamp(1.4rem, 2vw + 1rem, 2.5rem)",
                  }}
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </Grid>{" "}
          <Grid item flex={1}>
            <Avatar
              src={img02}
              variant="square"
              sx={{
                height: "100%",
                background: "rgba(217, 217, 217, 0.4)",
                width: "100%",
                maxHeight: "40rem",

                filter: "drop-shadow(0px 8px 9px rgba(0, 0, 0, 0.15))",
                borderRadius: ".7rem",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Products;
