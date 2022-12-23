import React from 'react'
import { useNavigate } from "react-router-dom";
import { POPULAR_CITIES } from "./Constant";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const CityCards = () => {
    const navigate = useNavigate();
    const handleRedirect = () => {
      navigate("/weather-detail");
    };

  return (
    <div>
        <div className="cities-card">
        {POPULAR_CITIES.map((x) => {
          return (
            <Card
              variant="outlined"
              sx={{ maxWidth: 350, background: "#2ddbf9" }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 40, textAlign: "center" }}
                  gutterBottom
                >
                  {x.city}
                </Typography>
                <Typography
                  sx={{ fontSize: 20, textAlign: "center" }}
                  gutterBottom
                >
                  {x.province}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleRedirect}>
                  More Detail
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  )
}
