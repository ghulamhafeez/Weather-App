import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export const PopularCities = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/weather-detail")
  };
  return (
    <div>
      <div className="cities-card">
        <Card variant="outlined" sx={{ maxWidth: 350, background: "#2ddbf9" }}>
          <CardContent>
            <Typography sx={{ fontSize: 40, textAlign: "center" }} gutterBottom>
              Lahore
            </Typography>
            <Typography sx={{ fontSize: 20, textAlign: "center" }} gutterBottom>
              Punjab
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">More Detail</Button>
          </CardActions>
        </Card>
        <Card variant="outlined" sx={{ maxWidth: 350, background: "#2ddbf9" }}>
          <CardContent>
            <Typography sx={{ fontSize: 40, textAlign: "center" }} gutterBottom>
              Multan
            </Typography>
            <Typography sx={{ fontSize: 20, textAlign: "center" }} gutterBottom>
              Punjab
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">More Detail</Button>
          </CardActions>
        </Card>
        <Card variant="outlined" sx={{ maxWidth: 350, background: "#2ddbf9" }}>
          <CardContent>
            <Typography sx={{ fontSize: 40, textAlign: "center" }} gutterBottom>
              Karachi
            </Typography>
            <Typography sx={{ fontSize: 20, textAlign: "center" }} gutterBottom>
              Sindh
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="small">More Detail</Button>
          </CardActions>
        </Card>
        <Card variant="outlined" sx={{ maxWidth: 350, background: "#2ddbf9" }}>
          <CardContent>
            <Typography sx={{ fontSize: 40, textAlign: "center" }} gutterBottom>
              Quetta
            </Typography>
            <Typography sx={{ fontSize: 20, textAlign: "center" }} gutterBottom>
              Blochistan
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">More Detail</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};
