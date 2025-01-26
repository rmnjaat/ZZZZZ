import React from "react";
import { Button } from "@mui/material";

const AnswerToggleButton = ({ showAnswer, toggleAnswer }) => (
  <Button variant="contained" size="small" sx={{ marginTop: 2 }} onClick={toggleAnswer}>
    {showAnswer ? "Hide Answer" : "Show Answer"}
  </Button>
);

export default AnswerToggleButton;
