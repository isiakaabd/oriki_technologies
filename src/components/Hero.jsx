import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
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
  const controls = useAnimation();

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Automatically go to the next image
      handleNextClick();
    }, 5000); // Change image every 5 seconds

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []); // Run this effect only once

  useEffect(() => {
    // Animate the background image sliding across the page
    controls.start({
      backgroundPositionX: ["0%", "100%"],
      transition: { duration: 5 },
    });
  }, [currentImageIndex, controls]);

  return (
    <motion.div
      key={currentImageIndex}
      initial={{ opacity: 1, backgroundPositionX: "0%" }}
      animate={controls}
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
        // height: "100vh",
        position: "relative",
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
            variant="h5"
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
  );
};

export default ImageSlider;
