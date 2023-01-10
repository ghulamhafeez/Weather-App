import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Dust, Clean, Arthristis } from "../../assets/Images";
export const HealthCard = () => {
  return (
    <Grid container direction={"column"} sx={{ color: "#E07A5F", pl: "255px" }}>
      <h2>Health & Activies</h2>
      <Grid
        gap={3}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "180px",
          pl: "5px",
        }}
      >
        <Card
          variant="outlined"
          sx={{ minWidth: 270, background: "#E07A5F", height: 180 }}
        >
          <img
            className="img-deatil"
            src={Dust}
            alt="Dust"
            width="45"
            height="45"
          ></img>
          <CardContent>
            <Typography
              sx={{ fontSize: 20, textAlign: "center", color: "white" }}
              gutterBottom
            >
              Dust And Dander
            </Typography>
            <Typography
              sx={{ fontSize: 15, textAlign: "center", color: "white" }}
              gutterBottom
            >
              Extremely High
            </Typography>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{ minWidth: 270, height: 180, background: "#E07A5F" }}
        >
          <img
            className="img-deatil"
            src={Arthristis}
            alt="Clean"
            width="45"
            height="45"
          ></img>
          <CardContent>
            <Typography
              sx={{ fontSize: 20, textAlign: "center", color: "white" }}
              gutterBottom
            >
              Arthristis
            </Typography>
            <Typography
              sx={{ fontSize: 15, textAlign: "center", color: "white" }}
              gutterBottom
            >
              Moderate
            </Typography>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{ minWidth: 270, background: "#E07A5F", height: 180 }}
        >
          <img
            className="img-deatil"
            src={Clean}
            alt="Clean"
            width="45"
            height="45"
          ></img>
          <CardContent>
            <Typography
              sx={{ fontSize: 20, textAlign: "center", color: "white" }}
              gutterBottom
            >
              Clear
            </Typography>
            <Typography
              sx={{ fontSize: 15, textAlign: "center", color: "white" }}
              gutterBottom
            >
              Everage Good
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
