import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCityAutoCompleteQuery } from "../../services/WeatherService";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

export const AutoComplete = () => {
  const navigate = useNavigate();
  const handleRedirect = (id) => {
    navigate(`/weather-detail/${id}`);
  };
  const [autoCompleteValue, setAutoCompleteValue] = useState();
  const { data } = useGetCityAutoCompleteQuery(autoCompleteValue);

  return (
    <Grid
      container
      flexWrap="wrap"
      bgcolor={"#E07A5F"}
      height={"60px"}
      ml={"240px"}
      width={"1118px"}
      justifyContent={"space-between"}
      className="search-div"
    >
      <Grid
        sx={{ width: "380px" }}
        justifyContent={"space-between"}
        display={"flex"}
        ml={8}
        gap={75}
      >
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={data || []}
          getOptionLabel={(option) =>
            option.LocalizedName ? option.LocalizedName : ""
          }
          onChange={(event, newValue) => {
            handleRedirect(newValue.Key);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search Bar"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
              value={autoCompleteValue}
              onChange={(e) => {
                setAutoCompleteValue(e.target.value);
              }}
              sx={{
                "& .MuiAutocomplete-input": {
                  minWidth: "260px !important",
                },
                "& .Mui-focused": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white !important",
                  },
                },
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  padding: "0px 5px",
                  color: "white",
                },
              }}
            />
          )}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "& .MuiInputBase-root": {
              "&:hover": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
              },
            },
            "& .css-yjsfm1": {
              color: "white !important",
            },
          }}
        />
        <Button sx={{color:"white"}}  onClick={() => navigate(-1)}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
};
