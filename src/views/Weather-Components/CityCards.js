import React from "react";
import { useNavigate } from "react-router-dom";
import { POPULAR_CITIES } from "./Constant";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const CityCards = () => {
  const navigate = useNavigate();
  const handleRedirect = (id) => {
    navigate(`/weather-detail/${id}`);
  };

  return (
    <div>
      <div className="cities-card">
        {POPULAR_CITIES.map((x) => {
          return (
            <Card
              variant="outlined"
              sx={{ minWidth: 250, background: "#E07A5F" }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 40, textAlign: "center", color: "white" }}
                  gutterBottom
                >
                  {x.city}
                </Typography>
                <Typography
                  sx={{ fontSize: 20, textAlign: "center", color: "white" }}
                  gutterBottom
                >
                  {x.province}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ color: "white" }}
                  size="small"
                  onClick={() => handleRedirect(x.Key)}
                >
                  More Detail
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
