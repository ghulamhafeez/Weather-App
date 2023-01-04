import React from "react";
import Button from "@mui/material/Button";
import { DETAIL_TABLS } from "./Constant";
import { HealthCard } from "./HealthCard";
import {
  useGetDailyForecastQuery,
  useGetHourlyForecastQuery,
} from "../../services/WeatherService";
import { useParams } from "react-router-dom";
import { WeatherDetailCards } from "./WeatherDetailCards";
export const WeatherDetail = () => {
  const { id } = useParams();
  const { data } = useGetDailyForecastQuery(id);

  const handleRedirect = () => {
    const { data } = useGetHourlyForecastQuery(id);
  };
  return (
    <div>
      <h1 className="text">Lahore</h1>
      <div className="button">
        {DETAIL_TABLS.map((x) => {
          return (
            <Button
              onClick={handleRedirect}
              sx={{ backgroundColor: "#E07A5F", color: "white" ,
                
              
              '&:hover':{
                backgroundColor:'#E07A5F'

              }
            }}
              variant="contained"
            >
              {x.name}
            </Button>
          );
        })}

      </div>

      <WeatherDetailCards data={data} />
      <HealthCard />
    </div>
  );
};
