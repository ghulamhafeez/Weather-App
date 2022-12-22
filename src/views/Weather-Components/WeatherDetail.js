import React from "react";
import Button from "@mui/material/Button";
import { Buttons } from "./Constant";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export const WeatherDetail = () => {
  return (
    <div>
      <h1 className="text">Lahore</h1>
      <div className="button">
        {Buttons.map((x) => {
          return <Button variant="contained">{x.name}</Button>;
        })}
      </div>
      <div className="label">
        <h2>Weather</h2> <h2>Air Quality</h2>
      </div>
      <div className="detail-card">
        <Card variant="outlined" sx={{ minWidth: 600, background: "#2ddbf9" }}>
          <CardContent>
            <Typography sx={{ fontSize: 40, textAlign: "center" }} gutterBottom>
              30
            </Typography>
            <Typography sx={{ fontSize: 20, textAlign: "center" }} gutterBottom>
              Tem
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card variant="outlined" sx={{ minWidth: 600, background: "#2ddbf9" }}>
          <CardContent>
            <Typography sx={{ fontSize: 40, textAlign: "center" }} gutterBottom>
              Good
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>
    </div>
  );
};
