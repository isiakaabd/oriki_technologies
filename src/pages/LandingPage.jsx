import { img01, img03, img04 } from "@assets/index";
import {
  Avatar,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const LandingPage = () => {
  const arr = [
    {
      abb: "I",
      value: "INNOVATION",
    },
    {
      abb: "N ",
      value: "Truly NIGERIAN but with a ",
    },
    {
      abb: "G",
      value: " GLOBAL MINDSET",
    },
    {
      abb: "E",
      value: " We are ETHICAL whilst ENRICHING lives",
    },
    {
      abb: "N",
      value: "NOVEL and",
    },
    {
      abb: "U ",
      value: " UNIQUE",
    },
    {
      abb: "I",
      value: " We INNOVATE",
    },
    {
      abb: "T",
      value: " Using a TECH FIRST approach",
    },
    {
      abb: "Y",
      value: " That will possitively impact YOU",
    },
  ];
  return (
    <Grid item container>
      <Grid
        item
        container
        sx={{
          height: { md: "calc(100vh - 80px)" },
          background: `#E20489 url(${img01}) center no-repeat `,
          backgroundSize: "cover",
          backgroundOrigin: "content-box",
          mb: "3rem",
          textAlign: "left",
        }}
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Grid
            item
            container
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            sx={{ height: "100%", color: "#fff" }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                width: "100%",
                textAlign: "left",
                lineHeight: "12rem",
                fontSize: { md: "9rem", xs: "5rem", sm: "6rem" },
              }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="h3"
              textAlign="left"
              width="100%"
              sx={{
                maxWidth: { md: "70%", xs: "100%", sm: "90%" },
                mr: "auto",
              }}
            >
              At Oriki, we want to showcase and maximize human possibilities by
              leveraging technology to build creative and innovative products
              while keeping our customers at the center stage.
            </Typography>
          </Grid>
        </Container>
      </Grid>
      <Container maxWidth="lg">
        <Grid item container gap={"4rem"} sx={{ py: "3rem" }}>
          <Grid item flex={1}>
            <Avatar
              src={img03}
              variant="square"
              sx={{
                width: "100%",
                height: "100%",
                maxHeight: "30rem",
                borderRadius: "2rem",
              }}
            />
          </Grid>
          <Grid item flex={1}>
            <Typography
              variant="h1"
              color={"secondary"}
              width={"100%"}
              textAlign={"right"}
              gutterBottom
            >
              Our Approach
            </Typography>
            <Typography
              variant="h6"
              color={"secondary"}
              width={"100%"}
              textAlign={"justify"}
              gutterBottom
            >
              Our approach to Product design at Oriki Technologie is centered on
              adding value. A deep understanding of our target audience in
              relation to the dynamics of the market is what sets us apart.
            </Typography>
            <Typography
              variant="h6"
              color={"secondary"}
              width={"100%"}
              textAlign={"justify"}
            >
              At Oriki Technologies, we do not see gaps in the market, we see
              opportunities to build bridges through innovation, strategic
              thinking and precise execution.{" "}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid item container gap={"4rem"} sx={{ py: "3rem" }}>
          <Grid item flex={1}>
            <Typography
              variant="h1"
              color={"secondary"}
              width={"100%"}
              textAlign={"left"}
              gutterBottom
            >
              Our Core Values
            </Typography>
            <Typography
              variant="h1"
              color={"primary"}
              width={"100%"}
              textAlign={"left"}
              gutterBottom
            >
              INGENUITY
            </Typography>
            <List dense>
              {arr.map((ite) => (
                <ListItem key={ite.value} disableGutters disablePadding>
                  <ListItemText
                    primaryTypographyProps={{ textAlign: "left" }}
                    primary={
                      <Typography
                        color={"secondary"}
                        variant="h6"
                        fontWeight={700}
                      >
                        {ite.abb} -
                        <Typography variant="span" fontWeight={500}>
                          {ite.value}
                        </Typography>
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item flex={1} sx={{ height: "100%" }}>
            <Grid item container justifyContent={"center"}>
              <Avatar
                src={img04}
                variant="square"
                sx={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "30rem",
                  borderRadius: "2rem",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default LandingPage;
