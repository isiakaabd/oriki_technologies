import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container, Toolbar, Typography } from "@mui/material";
import { img01, img05 } from "@assets/index";

const images = [
  {
    images: img01,
    text: " Our Mission",
    subtext:
      "At Oriki, we want to showcase and maximize human possibilities by leveraging technology to build creative and innovative products while keeping our customers at the center stage.",
  },
  {
    images: img05,
    text: "Our Vision",
    subtext: " To enhance the human potential through innovative technology",
  },
];
const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Automatically go to the next image
      handleNextClick();
    }, 5000); // Change image every 3 seconds

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []); // Run this effect only once

  return (
    // <Grid item container sx={{ height: "100%", p: 0 }}>
    //   <AnimatePresence mode="wait">
    <motion.div
      key={currentImageIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: `url(${images[currentImageIndex].images})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        //   height: "60vh",
        //   height: "calc(100vh - 80px)",
        heght: "100%",
        position: "relative",
        //   location.pathname === "/"
        //     ? ` url(${O2}) right 90vh no-repeat `
        //     : null,
      }}
    >
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Toolbar
          sx={{
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 3,
              },
            }}
            style={{ textAlign: "left", color: "#fff", width: "100%" }}
            viewport={{ once: true }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: 800,
                width: "100%",
                lineHeight: "12rem",
                fontSize: { md: "8vw", xs: "12vw", sm: "7rem" },
              }}
            >
              {images[currentImageIndex].text}
            </Typography>
          </motion.p>
          <Typography
            variant="h6"
            textAlign="justify"
            width="100%"
            sx={{
              fontWeight: 500,
              maxWidth: { md: "75%", xs: "100%", sm: "90%" },
              mr: "auto",
              color: "#fff",
            }}
          >
            {images[currentImageIndex].subtext}
          </Typography>
        </Toolbar>
      </Container>
    </motion.div>
    //   </AnimatePresence>
    // </Grid>
  );
};

export default ImageSlider;
