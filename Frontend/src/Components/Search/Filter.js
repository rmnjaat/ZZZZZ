import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ToastContainer, toast } from "react-toastify";
import "./Filter.css";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Select All",
  "MCQ",
  "Word Anagram",
  "Sentence Anagram",
  "Read Along",
  "Conversation",
  "Content only",
];

export default function Filter({ searchQuery, filter, setFilter }) {

  const handleChange = (event) => {
   
      setFilter(event.target.value);
   
  };

  return (
    <div className="filter-master">
      <h2>Filters :</h2>
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="single-selector-label">Select</InputLabel>
        <Select
          labelId="single-selector-label"
          id="single-selector"
          value={filter}
          onChange={handleChange}
          input={<OutlinedInput label="Select" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <ToastContainer />
    </div>
  );
}
