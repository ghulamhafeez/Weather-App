import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { LightThunder, PartlyCloudy } from "../../assets/Images";
export const WeatherDetailCards = ({ data }) => {
  return (
    <Grid>
      <div className="label">
        <h2>Weather</h2> <h2>Air Quality</h2>
      </div>
      <Grid
        container
        gap={8}
        mr={10}
        ml={3}
        direction="row"
        justifyContent={"center"}
      >
        <Card
          variant="outlined"
          sx={{
            minWidth: 500,
            height: 180,
            background: "#E07A5F",
            display: "flex",
          }}
        >
          <CardContent sx={{ pr: "25%" }}>
            <Typography
              sx={{ fontSize: 30, textAlign: "center", color: "white" }}
              gutterBottom
            >
              Temperature
            </Typography>
            <Typography
              sx={{ fontSize: 20, textAlign: "center", color: "white" }}
              gutterBottom
            >
              {data?.DailyForecasts[0]?.Temperature.Maximum.Value}
              {data?.DailyForecasts[0]?.Temperature.Maximum.Unit}
            </Typography>
          </CardContent>
          <img
            className="img-deatil"
            src={PartlyCloudy}
            alt="PartlyCloudy"
            width="70"
            height="70"
          ></img>
        </Card>

        <Card
          variant="outlined"
          sx={{
            minWidth: 500,
            height: 180,
            background: "#E07A5F",
            display: "flex",
          }}
        >
          <CardContent sx={{ pr: "25%" }}>
            <Typography
              sx={{ fontSize: 30, textAlign: "center", color: "white" }}
              gutterBottom
            >
              Icon Phrase
            </Typography>
            <Typography
              sx={{ fontSize: 20, textAlign: "center", color: "white" }}
              gutterBottom
            >
              {data?.DailyForecasts[0]?.Day.IconPhrase}
            </Typography>
          </CardContent>
          <img
            className="img-deatil"
            src={LightThunder}
            alt="PartlyCloudy"
            width="80"
            height="80"
          ></img>
        </Card>
      </Grid>
    </Grid>
  );
};
