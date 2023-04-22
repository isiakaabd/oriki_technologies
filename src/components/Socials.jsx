import { Grid } from "@mui/material";
import {
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  FacebookIcon,
  FacebookShareButton,
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
    Icon: WhatsappIcon,
    Button: WhatsappShareButton,
  },
];

const Socials = () => {
  return (
    <Grid item container justifyContent="space-between">
      {socialItems.map((social, index) => (
        <social.Button url={"#"} quote={"#"} key={index}>
           <social.Icon size={32} round />
        </social.Button>
      ))}
    </Grid>
  );
};

export default Socials;
