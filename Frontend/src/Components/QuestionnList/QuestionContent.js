import React from "react";
import AnagramDisplay from "./AnagramDisplay.js";
import MCQOptions from "./MCQOptions.js";
import AnswerToggleButton from "./AnswereToggleButton.js";
import { Typography } from "@mui/material";

const QuestionContent = ({
  type,
  anagramType,
  blocks,
  options,
  solution,
  showAnswer,
  toggleAnswer,
  questionId,
}) => {
  return (
    <>
      {type === "ANAGRAM" && <AnagramDisplay anagramType={anagramType} blocks={blocks} />}
      {type === "MCQ" && (
        <>
          <MCQOptions
            options={options}
            showAnswer={showAnswer}
            toggleAnswer={toggleAnswer}
            questionId={questionId}
          />
          <AnswerToggleButton showAnswer={showAnswer} toggleAnswer={toggleAnswer} />
        </>
      )}
      {solution && type !== "MCQ" && (
        <>
          <AnswerToggleButton showAnswer={showAnswer} toggleAnswer={toggleAnswer} />
          {showAnswer && (
            <Typography variant="body2" sx={{ marginTop: 2, fontStyle: "italic" }}>
              Answer: {solution}
            </Typography>
          )}
        </>
      )}
    </>
  );
};

export default QuestionContent;
