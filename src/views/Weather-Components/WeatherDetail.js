import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { DETAIL_TABLS } from "./Constant";
import { HealthCard } from "./HealthCard";
import { HourlyWeather } from "../Weather-Components/HourlyWeather";
import {
  useGetDailyForecastQuery,
  useGetlocationsForecastQuery,
} from "../../services/WeatherService";
import { useParams } from "react-router-dom";
import { WeatherDetailCards } from "./WeatherDetailCards";
import { Grid } from "@mui/material";
export const WeatherDetail = () => {
  const [value, setValue] = useState(0);
  const { id } = useParams();
  const { data } = useGetDailyForecastQuery(id);

  const { data: locationData } = useGetlocationsForecastQuery(id);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1 className="text">{locationData?.LocalizedName}</h1>
      <Grid justifyContent={"center"} className="button">
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                "& .MuiButtonBase-root-MuiTab-root.Mui-selected": {
                  color: "#E07A5F !important",
                },
              }}
            >
              {DETAIL_TABLS.map((x) => {
                return <Tab label={x.name} />;
              })}
            </Tabs>
          </Box>
        </Box>
      </Grid>
      {value === 1 ? (
        <HourlyWeather id={id} />
      ) : (
        <>
          <WeatherDetailCards data={data} />
          <HealthCard />{" "}
        </>
      )}
    </div>
  );
};
