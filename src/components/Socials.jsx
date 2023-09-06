import {
  FacebookTwoTone,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";

const socialItems = [
  {
    Icon: FacebookTwoTone,
  },
  {
    Icon: LinkedIn,
  },
  {
    Icon: Twitter,
  },
  {
    Icon: Instagram,
  },
];

const Socials = () => {
  return (
    <Grid item container>
      <Grid
        item
        container
        justifyContent="space-between"
        rowGap={2}
        flexWrap={{ md: "nowrap" }}
      >
        {socialItems.map((social, index) => (
          <IconButton
            sx={{ bgcolor: "#fff", "&:hover": { bgcolor: "#fff" } }}
            key={index}
          >
            <social.Icon style={{ fill: "#6A1347", fontSize: "2.5rem" }} />
          </IconButton>
        ))}
      </Grid>
    </Grid>
  );
};

export default Socials;
