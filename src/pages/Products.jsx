import { cheers, img02 } from "@assets";
import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Grid
      item
      container
      sx={{
        minHeight: { md: "calc(100vh - 65px)" },

        // px: { xs: 0, md: 4 },
        py: "3rem",
        mb: "17rem",
        background: "rgba(217, 217, 217, 0.4)",
      }}
    >
      <Container maxWidth="xl" height="100%">
        <Grid
          item
          container
          gap={{ md: "3.5rem", xs: "2rem" }}
          flexDirection={{ xs: "column", sm: "row" }}
          flexWrap={{ md: "nowrap", xs: "wrap" }}
          sx={{ py: "5rem", height: "100%", px: { xs: 0, md: 4 } }}
        >
          {" "}
          <Grid item flex={1} height="100%">
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
                  fontWeight={500}
                  fontSize={{ md: "3rem" }}
                  textAlign={"justify"}
                  gutterBottom
                >
                  With Cheers, birthdays mean a bit more than just a special
                  day. It’s achance to show people how much they mean to you and
                  how much you care; a way to experience birthdays as they are
                  truly meant to be, filled with love, thouthfulness and spirit.
                </Typography>
              </Grid>
              <Grid item mt="4rem">
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
                    backgroundColor: "#035930",
                    borderRadius: ".7rem",
                    textDecoration: "underline",
                    textUnderlineOffset: "5px",
                    textTransform: "initial",
                    fontSize: "clamp(1.4rem, 2vw + 1rem, 2.5rem)",
                    width: { md: "31rem" },
                  }}
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Avatar
              src={img02}
              variant="square"
              sx={{
                height: "100%",
                background: "rgba(217, 217, 217, 0.4)",
                width: "100%",
                maxHeight: "100%",
                maxWidth: "45rem",
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
