import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const MCQOptions = ({ options, showAnswer }) => {
  const optionPrefix = ["a)", "b)", "c)", "d)", "e)", "f)"];

  return (
    <List>
      {options.map(([id, text, isCorrectAnswer], idx) => (
        <ListItem
          key={id}
          sx={{
            backgroundColor: showAnswer && isCorrectAnswer ? "#d4edda" : "inherit",
            borderRadius: 1,
          }}
        >
          <ListItemText primary={`${optionPrefix[idx]} ${text}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default MCQOptions;
