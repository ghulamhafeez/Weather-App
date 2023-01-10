import React from "react";
import { useNavigate } from "react-router-dom";
import { POPULAR_CITIES } from "./Constant";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
export const CityCards = () => {
  const navigate = useNavigate();
  const handleRedirect = (id) => {
    navigate(`/weather-detail/${id}`);
  };

  return (
    <Grid container gap={5} mb={3} ml={4} item sx={4} justifyContent={"center"}>
      {POPULAR_CITIES.map((x) => {
        return (
          <Grid item>
            <Card
              variant="outlined"
              sx={{ minWidth: 250, height: 180, background: "#E07A5F" }}
            >
              <CardContent sx={{ pb: "0" }}>
                <img
                  className="img"
                  src={x.url}
                  alt="Weather Icon"
                  width="40"
                  height="40"
                ></img>
                <Typography
                  sx={{
                    fontSize: 30,
                    textAlign: "center",
                    color: "white",
                    "& .MuiTypography-root": {
                      mb: "-5",
                    },
                  }}
                  gutterBottom
                >
                  {x.city}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 15,
                    textAlign: "center",
                    color: "white",
                    pt: 0,
                  }}
                  gutterBottom
                >
                  {x.province}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ color: "white", padding: "1px" }}
                  onClick={() => handleRedirect(x.key)}
                >
                  More Detail
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
