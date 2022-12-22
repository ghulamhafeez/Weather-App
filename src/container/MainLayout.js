import React from "react";
import {Contents} from "./Contents";
import {Footer} from "../views/Weather-Components/Footer";
import {Header} from "../views/Weather-Components/Header";

const MainLayout = () => {
  return (
    <div>
     <Header />
      <Contents />
      <Footer />
    </div>
  )
}

export default MainLayout;
