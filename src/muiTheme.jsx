import { createTheme } from "@mui/material/styles";

const dark = "#737373";
const main = "#18B067";
const secondary = "#035930";

export const muiTheme = createTheme({
  palette: {
    common: {},
    primary: {
      main,
    },

    secondary: {
      main: dark,
    },
    info: {
      main: secondary,
    },
    // success: {
    //   main: purple,
    // },
    // warning: {
    //   main: gold,
    // },
    // disabled: {
    //   main: disable,
    // },
  },
  typography: {
    fontFamily: ["Raleway", "sans-serif", "Roboto"].join(", "),
    fontSize: 10,
    htmlFontSize: 10,
    h1: {
      fontSize: "clamp(3rem, 2vw, 4.5rem)",
      fontWeight: 800,
      color: "#fff",
      // lineHeight: "3rem",
    },
    h2: {
      fontSize: "clamp(2.5rem, 2vw, 3.5rem)",
      fontWeight: 700,
    },
    h3: {
      fontSize: "clamp(2rem, 2vw,2.7rem)",
      fontWeight: 500,
    },
    h4: {
      fontSize: "clamp(1.6rem,2vw,2.4rem)",
      fontWeight: 500,
    },
    h5: {
      fontSize: "clamp(1.4rem,2vw,1.85rem)",
      fontWeight: 500,
    },
    h6: {
      fontSize: "clamp(1.9rem,2vw,2.2rem)",
      fontWeight: 500,
    },

    body2: {
      fontSize: "clamp(1.6rem,2vw, 2.4rem)",
      fontWeight: 500,
      lineHeight: 1.85,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        boxShadow:
          "0px 5px 5px -3px rgba(0,0,0,.5),0px 8px 10px 1px rgba(0,0,0,0.01),0px 3px 14px 2px rgba(0,0,0,0.01)",
      },
    },
  },
});
