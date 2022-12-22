import React from "react";
import TextField from "@mui/material/TextField";
import { Cities } from "./Constant";
import Autocomplete from "@mui/material/Autocomplete";
export const Header = () => {
  return (
    <>
      <div className="search-div">
        <div className="search">
   
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={Cities.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Bar"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </div>
      </div>
    </>
  );
};
