import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Searchbar.css";

function Searchbar({ onSearchSubmit }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  
  const handleSearchClick = () => {
    const sanitizedValue = searchValue.replace(/\s+/g, " ").trim(); // Remove extra spaces

    if (sanitizedValue === "") {
      toast.warn("Enter something to search", {
        position: "top-right",
      });
    } else {
      onSearchSubmit(sanitizedValue); // Notify App.js with the sanitized search value
    }
  };


  return (
    <div className="searchbar-master">
      <div className="searchbar-main">
        <TextField
          fullWidth
          label="Type here"
          id=""
          variant="outlined"
          margin="normal"
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          size="large"
          sx={{
            height: "53px",
          }}
          onClick={handleSearchClick}
        >
          Search
        </Button>
      </div>

      <ToastContainer />

    </div>
  );
}

export default Searchbar;
