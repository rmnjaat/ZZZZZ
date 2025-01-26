import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Skeletonn from "./Skeletonn";
import QuestionCard from "./QuestionCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuestionList = ({ currPage, questionList, pageLimit, loading }) => {
  const [showAnswers, setShowAnswers] = useState({});
  let questionNumber = (currPage - 1) * pageLimit + 1;

  const toggleAnswer = (id) => {
    setShowAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!currPage || loading) {
    return (
      <>
        {[...Array(pageLimit)].map((_, index) => (
          <Skeletonn key={index} />
        ))}
      </>
    );
  }


  //for no result
  if (questionList.length === 0) {
    return (
      <Box sx={{ padding: 3, textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
        <Typography variant="h6" color="textSecondary">
          No results found
        </Typography>
      </Box>
    );
  }

  
  return (
    <Box sx={{ padding: 3, maxWidth: 700, margin: "0 auto" }}>
      {questionList.map((question, index) => (
        <QuestionCard
          key={question[0]}
          question={question}
          questionNumber={questionNumber++}
          showAnswers={showAnswers}
          toggleAnswer={toggleAnswer}
        />
      ))}
      <ToastContainer />
    </Box>
  );
};

export default QuestionList;
