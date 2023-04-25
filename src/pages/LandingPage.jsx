import { Cards } from "@/components";
import { img01, img03, img04, Chats, Media, Mobile } from "@assets";

import {
  Avatar,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Slide,
  Typography,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

const LandingPage = () => {
  const cardArr = [
    {
      Icon: Chats,
      head: "General Support",
      sub: "support@oriki.letters.africa",
    },
    {
      Icon: Mobile,
      head: "Mobile",
      sub: "+234 705 353 9199",
    },
    {
      Icon: Media,
      head: "Media",
      sub: "socials@oriki.letters.africa",
    },
  ];
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
          height: { xs: "50vh", md: "calc(100vh - 80px)" },
          background: `#18B067 url(${img01}) center no-repeat `,
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
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 3,
                },
              }}
              style={{ textAlign: "left", width: "100%" }}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  fontWeight: 800,
                  width: "100%",

                  lineHeight: "12rem",
                  fontSize: { md: "8vw", xs: "12vw", sm: "7rem" },
                }}
              >
                Our Mission
              </Typography>
            </motion.p>
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
        <Grid
          item
          container
          sx={{ py: "3rem" }}
          gap={{ md: "4rem", xs: "2rem" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Grid item flex={1}>
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
                  maxHeight: "30rem",
                  borderRadius: "2rem",
                }}
              />
            </motion.div>
          </Grid>
          <Grid item flex={1}>
            <motion.p
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
                variant="h1"
                color={"secondary"}
                width={"100%"}
                textAlign={"right"}
                gutterBottom
              >
                Our Approach
              </Typography>
            </motion.p>
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
                variant="h6"
                color={"secondary"}
                width={"100%"}
                textAlign={"justify"}
                gutterBottom
              >
                Our approach to Product design at Oriki Technologie is centered
                on adding value. A deep understanding of our target audience in
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
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid
          item
          container
          gap={{ md: "4rem", xs: "2rem" }}
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ py: "3rem" }}
        >
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

            <List dense component={motion.ul} variants={variants}>
              {arr.map((ite) => (
                <AnimatePresence>
                  <ListItem
                    key={ite.value}
                    disableGutters
                    {...variantsLi}
                    disablePadding
                    component={motion.li}
                  >
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
                </AnimatePresence>
              ))}
            </List>
          </Grid>
          <Grid item flex={1} sx={{ height: "100%" }}>
            <Grid item container justifyContent={"center"}>
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
                    maxHeight: "30rem",
                    borderRadius: "2rem",
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" height="100%">
        <Grid
          item
          container
          width={"100%"}
          flexDirection={"column"}
          sx={{
            py: 4,
            p: { md: 10, sm: 2, xs: 0 },
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Grid item>
            <Typography
              variant="h1"
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
                py: { md: 4, xs: 0 },
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              {cardArr.map((ite) => (
                <Cards key={ite.head} item={ite} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default LandingPage;
