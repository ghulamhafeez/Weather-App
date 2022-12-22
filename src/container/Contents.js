import React from 'react'
import { WeatherHome} from "../views/Weather-Components/WeatherHome"
import { WeatherDetail } from '../views/Weather-Components/WeatherDetail';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export const Contents = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <WeatherHome />
    },
    {
      path: "/weather-detail",
      element: <WeatherDetail/>
    }
  ])



  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

