import React , { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCityAutoCompleteQuery } from "../../services/WeatherService";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
export const AutoComplete = () => {
  const navigate = useNavigate();
  const handleRedirect = (id) => {
    navigate(`/weather-detail/${id}`);
  };

  const [autoCompleteValue, setAutoCompleteValue] = useState();

  const { data } = useGetCityAutoCompleteQuery(autoCompleteValue);

  return (
    <div className="search-div">
      <div className="search">
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={data || []}
          getOptionLabel={(option) =>
            option.LocalizedName ? option.LocalizedName : ""
          }
          onChange={(option) => handleRedirect(option.Key)}
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
                "& .Mui-focused": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white !important",
                  },
                },
                "& .MuiOutlinedInput-root": {
                        height:'40px',
                        padding: "0px 5px",
                        color:'white',
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
      </div>
    </div>
  );
};
