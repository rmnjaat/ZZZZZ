import React, { useState } from "react";
import { MenuItem, FormControl, Select, InputLabel } from "@mui/material";

export const   QuestionsPerPageDropdown = ({ options, handleQuesPerChange }) => {
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    handleQuesPerChange(event.target.value);
  };

  return (
    <FormControl fullWidth variant="outlined" sx={{ maxWidth: 70 }}>
      <InputLabel id="questions-per-page-label">Limit</InputLabel>
      <Select
        labelId="questions-per-page-label"
        value={selectedValue}
        onChange={handleChange}
        label="Limit"
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};