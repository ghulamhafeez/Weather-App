import React from "react";
import {Contents} from "./Contents";
import {Footer} from "../views/Weather-Components/Footer";
import {Header} from "../views/Weather-Components/Header";
import { Grid } from "@mui/material";

const MainLayout = () => {
  return (
    <Grid maxWidth="xl" m={'auto'} bgcolor={"#ECE9E9"} >
     <Header />
      <Contents />
      <Footer />
    </Grid>
  )
}

export default MainLayout;
