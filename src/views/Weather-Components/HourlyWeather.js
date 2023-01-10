import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useGetHourlyForecastQuery } from "../../services/WeatherService";
import { PartlyCloudy } from "../../assets/Images";
export const HourlyWeather = ({ id }) => {
  const { data } = useGetHourlyForecastQuery(id);

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      pt={2}
      pr={14}
      ml={"240px"}
      flexWrap="wrap"
      marginRight={20}
      width={1200}
    >
      {data?.map((x) => {
        return (
          <Grid item>
            <Card
              variant="outlined"
              sx={{ width: 150, height: 220, background: "#E07A5F" }}
            >
              <CardContent>
                <img
                  className="img-hourly"
                  src={PartlyCloudy}
                  alt="PartlyCloudy"
                  width="50"
                  height="50"
                ></img>
                <Grid sx={{ display: "flex" }}>
                  <Typography
                    sx={{ fontSize: 30, textAlign: "center", color: "white" }}
                    gutterBottom
                  >
                    {x?.Temperature.Value}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 30, textAlign: "center", color: "white" }}
                    gutterBottom
                  >
                    {x?.Temperature.Unit}
                  </Typography>
                </Grid>
                <Typography
                  sx={{ fontSize: 30, textAlign: "center", color: "white" }}
                  gutterBottom
                >
                  {x?.IconPhrase}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
