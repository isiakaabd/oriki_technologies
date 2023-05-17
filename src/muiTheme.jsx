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
  },
  typography: {
    fontFamily: ["Raleway", "sans-serif", "Roboto"].join(", "),
    fontSize: 10,
    htmlFontSize: 10,
    h1: {
      fontSize: "clamp(4rem, 2vw, 5rem)",
      fontWeight: 800,
      color: "#fff",
    },
    h2: {
      fontSize: "clamp(2.5rem, 2vw + 1rem, 3.5rem)",
      fontWeight: 700,
    },
    h3: {
      fontSize: "clamp(2rem, 2vw + 1rem,2.7rem)",
      fontWeight: 500,
    },
    h4: {
      fontSize: "clamp(1.8rem,2vw + 1rem,2.4rem)",
      fontWeight: 500,
    },
    h5: {
      fontSize: "clamp(1.4rem,2vw + 1rem,2.2rem)",
      fontWeight: 500,
    },
    h6: {
      fontSize: "clamp(1.2rem,2vw + 1rem,1.8rem)",
      fontWeight: 500,
    },

    body2: {
      fontSize: "clamp(1.6rem,2vw + 1rem, 2.4rem)",
      fontWeight: 500,
      lineHeight: 1.85,
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          width: "2px",
        },
      },
    },
  },
});
