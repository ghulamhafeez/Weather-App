import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { useGetCityAutoCompleteQuery } from "../../services/WeatherService";
export const Header = () => {
  const navigate = useNavigate();
  const handleRedirect = (id) => {
    navigate(`/weather-detail/${id}`);
  };

  const [autoCompleteValue, setAutoCompleteValue] = useState();

  const { data } = useGetCityAutoCompleteQuery(autoCompleteValue);
  console.log("d", data);

  return (
    <>
      <div>
        <div className="search-div">
          <div className="search">
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={data}
              getOptionLabel={(option) =>
                option.LocalizedName ? option.LocalizedName : ""
              }
              onChange={(option) => handleRedirect(option.Key)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search Bar"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                  value={autoCompleteValue}
                  onChange={(e) => {
                    console.log("e", e);
                    setAutoCompleteValue(e.target.value);
                  }}
                  sx={{
                    '& .Mui-focused':{
                      '& .MuiOutlinedInput-notchedOutline':{
                        borderColor:'white !important'
                      }
                    },
                   '& .MuiInputLabel-root':{
                    color:'white'
                   },
                  }}
                />
              )}
              sx={{
                '& .MuiOutlinedInput-notchedOutline':{
                  borderColor:'white',
                  
                },
                '& .MuiInputBase-root':{
                  '&:hover':{
                    '& .MuiOutlinedInput-notchedOutline':{
                      borderColor:'white'
                    
                    }
                   }
                },
                '& .css-yjsfm1':{
                  color: 'white !important'
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
