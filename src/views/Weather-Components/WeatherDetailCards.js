import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export const WeatherDetailCards = ({data}) => {
    console.log("data", data);
  return (
    <div>
      <div className="label">
        <h2>Weather</h2> <h2>Air Quality</h2>
      </div>
      <div className="detail-card">
        <Card variant="outlined" sx={{ minWidth: 550, background: "#E07A5F" }}>
          <CardContent>
            <Typography sx={{ fontSize: 40, textAlign: "center" ,color: "white"}} gutterBottom>
              {/* {data.DailyForecasts[0].Temperature.Maximum.Value} */}
            </Typography>
            <Typography sx={{ fontSize: 20, textAlign: "center",color: "white" }} gutterBottom>
              Tem
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card variant="outlined" sx={{ minWidth: 550, background: "#E07A5F" }}>
          <CardContent>
            <Typography sx={{ fontSize: 40, textAlign: "center" ,color: "white"}} gutterBottom>
              Good
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>
    </div>
  );
};


