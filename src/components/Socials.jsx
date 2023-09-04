import { Grid } from "@mui/material";
import {
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
} from "react-share";

const socialItems = [
  {
    Icon: FacebookIcon,
    Button: FacebookShareButton,
  },
  {
    Button: LinkedinShareButton,
    Icon: LinkedinIcon,
  },
  {
    Icon: TwitterIcon,
    Button: TwitterShareButton,
  },
  {
    Icon: InstapaperIcon,
    Button: WhatsappShareButton,
  },
];

const Socials = () => {
  return (
    <Grid
      item
      container
      justifyContent={{ md: "space-between", xs: "space-around" }}
    >
      {socialItems.map((social, index) => (
        <social.Button url={"#"} quote={"#"} color="#fff" key={index}>
           
          <social.Icon
            size={32}
            round
            iconFillColor="#035930"
            bgStyle={{ fill: "#fff" }}
          />
        </social.Button>
      ))}
    </Grid>
  );
};

export default Socials;
