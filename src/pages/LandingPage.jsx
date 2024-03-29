import { img03, img04 } from "@assets";

import {
  Avatar,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import ImageSlider from "../components/Hero";

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
      value: " We are ETHICAL whilst enriching lives",
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
  const variants = {
    open: {
      transition: { staggerChildren: 0.8, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const variantsLi = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };

  return (
    <Grid item container>
      <Grid
        item
        container
        sx={{
          height: { xs: "calc(100vh - 58px)", md: "calc(100vh - 80px)" },
          backgroundColor: "#18B067",
          //url(${img01}) center no-repeat `,
          backgroundSize: "cover",
          backgroundOrigin: "content-box",
          mb: "3rem",
          textAlign: "left",
        }}
      >
        <ImageSlider />
      </Grid>
      <Container maxWidth="xl" sx={{ mt: 8 }}>
        <Grid
          item
          container
          sx={{ margin: "auto", pt: "2rem", pb: "3rem", px: { xs: 0, md: 4 } }}
          gap={{ md: "4rem", xs: "2rem" }}
          flexWrap={{ md: "nowrap" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Grid item sm={6.5} xs={12}>
            <motion.div
              initial={{ translateX: "-500px" }}
              whileInView={{
                translateX: 0,
                transition: {
                  duration: 3,
                },
              }}
              viewport={{ once: true }}
              style={{ textAlign: "left", width: "100%" }}
            >
              <Avatar
                src={img03}
                variant="square"
                sx={{
                  width: "100%",
                  height: "100%",
                  minHeight: "46rem",
                  "& img": {
                    borderRadius: "2rem",
                  },
                }}
              />
            </motion.div>
          </Grid>
          <Grid item sm={5.5} xs={12}>
            <motion.h1
              initial={{ translateX: "100px" }}
              whileInView={{
                translateX: "0",
                transition: {
                  duration: 3,
                },
              }}
              viewport={{ once: true }}
              style={{ textAlign: "left", width: "100%" }}
            >
              <Typography
                variant="p"
                color="secondary"
                fontSize={{ md: "5rem", sm: "4rem", xs: "1.8rem" }}
                sx={{ lineHeight: "5.8rem" }}
                width={"100%"}
                mt={3}
                my={4}
                textAlign={{ xs: "left", sm: "right" }}
                gutterBottom
              >
                Our Approach
              </Typography>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 5,
                },
              }}
              viewport={{ once: true }}
              style={{ textAlign: "left", width: "100%" }}
            >
              <Typography
                variant="h5"
                color={"secondary"}
                width={"100%"}
                textAlign={"justify"}
                gutterBottom
                sx={{ mb: 2, fontWeight: 500, lineHeight: "2.6rem" }}
              >
                Our approach to product design at Oriki Technologies is centered
                on adding value. A deep understanding of our target audience in
                relation to the dynamics of the market is what sets us apart.
              </Typography>

              <Typography
                variant="h5"
                color={"secondary"}
                width={"100%"}
                textAlign={"justify"}
                gutterBottom
                sx={{ mb: 2, fontWeight: 500, lineHeight: "2.6rem" }}
              >
                At Oriki Technologies, we do not see gaps in the market, we see
                opportunities to build bridges through innovation, strategic
                thinking and precise execution.{" "}
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl" sx={{ mb: 8 }}>
        <Grid
          item
          container
          gap={{ md: "4rem", xs: "2rem" }}
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{
            py: "3rem",
            height: "100%",
            px: { xs: 0, md: 4 },
          }}
        >
          <Grid item flex={1} rowGap={{ md: "2.7rem" }}>
            <Typography
              variant="h1"
              color={"secondary"}
              width={"100%"}
              textAlign={"left"}
              fontSize={{ md: "5rem", sm: "4rem", xs: "1.8rem" }}
              sx={{ lineHeight: "5.8rem" }}
              gutterBottom
            >
              Our Core Values
            </Typography>
            <Typography
              variant="h1"
              color={"primary"}
              width={"100%"}
              fontSize={{ md: "4.3rem" }}
              sx={{ lineHeight: "5.8rem", fontWeight: 700 }}
              textAlign={"left"}
            >
              INGENUITY
            </Typography>

            <List dense component={motion.ul} variants={variants}>
              {arr.map((ite, idx) => (
                <AnimatePresence key={idx}>
                  <ListItem
                    key={ite.value}
                    disableGutters
                    {...variantsLi}
                    disablePadding
                    dense
                    component={motion.li}
                  >
                    <ListItemText
                      primaryTypographyProps={{ m: 0 }}
                      primary={
                        <Typography
                          sx={{ fontSize: "2.4rem" }}
                          color={"secondary"}
                          fontWeight={700}
                        >
                          {ite.abb} -
                          <Typography
                            variant="span"
                            fontWeight={500}
                            textAlign="left"
                          >
                            {ite.value}
                          </Typography>
                        </Typography>
                      }
                    />
                  </ListItem>
                </AnimatePresence>
              ))}
            </List>
          </Grid>
          <Grid item flex={1.1} sx={{ height: "100%" }}>
            <Grid
              item
              container
              justifyContent={"center"}
              sx={{ height: "100%", mt: 3 }}
            >
              <motion.div
                initial={{ translateX: "500px" }}
                whileInView={{
                  translateX: 0,
                  transition: {
                    duration: 3,
                  },
                }}
                viewport={{ once: true }}
                style={{ textAlign: "left", width: "100%" }}
              >
                <Avatar
                  src={img04}
                  variant="square"
                  sx={{
                    width: "100%",
                    height: "100%",
                    // maxHeight: "30rem",
                    borderRadius: "2rem",
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* <Container maxWidth="xl" height="100%">
        <Grid
          item
          container
          width={"100%"}
          flexDirection={"column"}
          sx={{
            py: { md: "15rem", sm: 2, xs: 4 },

            px: { xs: 0, md: 4 },
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Grid item>
            <Typography
              variant="h1"
              fontSize={{ md: "5rem" }}
              sx={{ lineHeight: "5.8rem", pb: { xs: 2, sm: 0 } }}
              color={"secondary"}
              fontWeight={800}
              width={"100%"}
              textAlign={"center"}
            >
              Contact Us
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              item
              container
              width={"100%"}
              rowGap={{ xs: "2rem", sm: 0 }}
              columnGap={{ sm: 1, md: 0 }}
              sx={{
                py: { md: 4, xs: 2 },
                justifyContent: "space-between",
                height: "100%",
                zIndex: -10000,
                isolation: "isolate",
              }}
            >
              {cardArr.map((ite) => (
                <Cards key={ite.head} item={ite} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container> */}
    </Grid>
  );
};

export default LandingPage;

//  <Grid
//    item
//    container
//    alignItems={"center"}
//    flexDirection={"column"}
//    justifyContent={"center"}
//    sx={{ height: "100%", color: "#fff", px: { xs: 0, md: 4 } }}
//  >
//    <motion.p
//      initial={{ opacity: 0 }}
//      whileInView={{
//        opacity: 1,
//        transition: {
//          duration: 3,
//        },
//      }}
//      style={{ textAlign: "left", width: "100%" }}
//      viewport={{ once: true }}
//    >
//      <Typography
//        sx={{
//          fontWeight: 800,
//          width: "100%",

//          lineHeight: "12rem",
//          fontSize: { md: "8vw", xs: "12vw", sm: "7rem" },
//        }}
//      >
//        Our Mission
//      </Typography>
//    </motion.p>
//    <Typography
//      variant="h6"
//      textAlign="justify"
//      width="100%"
//      sx={{
//        fontWeight: 500,
//        maxWidth: { md: "75%", xs: "100%", sm: "90%" },
//        mr: "auto",
//      }}
//    >
//      At Oriki, we want to showcase and maximize human possibilities by
//      leveraging technology to build creative and innovative products while
//      keeping our customers at the center stage.
//    </Typography>
//  </Grid>;
