import {
  Card,
  Grid,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";

const Cards = ({ item: { Icon, head, sub } }) => {
  return (
    <Grid item md={3.5} sm={3.5} xs={12} sx={{ height: "20.2rem" }}>
      <Card
        width={"100%"}
        sx={{
          height: "100%",
          "&:hover": {
            transition: "color ease-in 3ms",
            "& .MuiTypography-root": {
              color: "#fff",
            },
            "& .MuiSvgIcon-root": {
              stroke: "#fff",
              fill: "#fff",
            },
            background: "#18B067",
            color: "#fff",
            fill: "#fff",
            stroke: "#fff",
          },
        }}
      >
        <CardActionArea sx={{ height: "100%" }}>
          <CardContent>
            <Grid
              item
              container
              height={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Grid item>
                <Icon
                  sx={{
                    fontSize: "5rem",
                    stroke: "#18B067",
                    fill: "#18B067",
                  }}
                />
              </Grid>
              <Typography
                gutterBottom
                fontWeight={700}
                variant="h4"
                color={"secondary"}
              >
                {head}
              </Typography>
              <Typography fontWeight={500} variant="h5" color={"primary"}>
                {sub}
              </Typography>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Cards;
