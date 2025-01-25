import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Searchbar.css";

function Searchbar() {
  return (
    <div className="searchbar-master">
      <div className="searchbar-main">
        <TextField
          fullWidth
          label="Type here"
          id=""
          variant="outlined" // or "filled" or "standard"
          margin="normal"
        />
        <Button
          variant="contained" //outlined
          size="large"
          sx={{
            height: "53px",
          }}
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default Searchbar;
