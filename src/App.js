import "./App.css";
import React from "react";
import { store } from "./store/Store";
import { Provider } from "react-redux";

import { WeatherDetail } from "../src/views/Weather-Components/WeatherDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./container/MainLayout";
import { WeatherHome } from "./views/Weather-Components/WeatherHome";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,

      children: [
        {
          path: ``,
          element: <WeatherHome />,
        },
        {
          path: `/weather-detail/:id`,
          element: <WeatherDetail />,
        },
    
      ],

    },
  
  ]);
  return (
    <div>
      <React.StrictMode>
        <Provider store={store}>
          <RouterProvider router={router}></RouterProvider>
        </Provider>
      </React.StrictMode>
    </div>
  );
}

export default App;
