import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
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
  "MCQ",
  "Word Anagram",
  "Sentence Anagram",
  "Read Along",
  "Conversation",
  "Content only",
];

export default function Filter() {
  const [selectedNames, setSelectedNames] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedNames(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
    <div className="filter-master">
        <h2>Filters :</h2>
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="checkbox-selector-label">Select</InputLabel>
        <Select
          labelId="checkbox-selector-label"
          id="checkbox-selector"
          multiple
          value={selectedNames}
          onChange={handleChange}
          input={<OutlinedInput label="select"  />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedNames.includes(name)} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      </div>
    </>
  );
}
