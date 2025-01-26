import React, { useState } from "react";
import { Card, CardContent, Typography, Button, List, ListItem, ListItemText, Box, Stack } from "@mui/material";
import Skeletonn from "./Skeletonn";
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const QuestionList = ({ currPage, questionList , pageLimit , loading }) => {


  const [showAnswers, setShowAnswers] = useState({});

  let questionNumber = (currPage - 1) * pageLimit + 1;

  const toggleAnswer = (id) => {
    setShowAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };


  
  if (!currPage || !questionList || loading) {
    return (
      <>
        {[...Array(pageLimit)].map((_, index) => (
          <Skeletonn key={index} />
        ))}
      </>
    );
  }

  

  // if(questionList.length==0){
  //   // console.log("Till Toast");
  //   // toast.warn("No result Found" , {
  //   //   position:"top-right"
  //   // })
  // }
  

  const optionPrefix = ["a)", "b)", "c)", "d)", "e)", "f)"];



  return (
    <Box sx={{ padding: 3, maxWidth: 700, margin: "0 auto" }}>
      {questionList.map((question, index) => {
        const [_id,
          type,
          title,
          siblingId,
          options,
          blocks,
          anagramType,
          solution] = question;
        return (

          <Card
            key={_id}
            sx={{
              marginBottom: 3,
              boxShadow: 2,
              position: "relative",
              paddingTop: "30px", // Added padding to prevent overlap
            }}
          >
            {/* Question Index */}
            <Typography
              variant="body2"
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                backgroundColor: "#f0f0f0",
                padding: "2px 8px",
                borderRadius: "4px",
                fontWeight: "bold",
              }}
            >
              Q{questionNumber++}
            </Typography>

            <CardContent>
              {/* Question Title */}
              <Typography variant="h6">{title}</Typography>
              <Typography variant="subtitle2" color="textSecondary" sx={{ marginBottom: 2 }}>
                Type: {type}{" "}{anagramType}
              </Typography>

              {/* Anagram (Word Type): Show in one line */}
              {type === "ANAGRAM" && anagramType === "WORD" && blocks && (
                <Stack direction="row" spacing={2}>
                  {blocks.map((block) => {
                    const [_idb, text, showInOption] = block;

                    return (
                      showInOption && (
                        <Box
                          key={_idb}
                          sx={{
                            border: "1px solid #ccc",
                            padding: 1,
                            borderRadius: 1,
                            textAlign: "center",
                            minWidth: 40,
                          }}
                        >
                          {text}
                        </Box>
                      )
                    )
                  })}
                </Stack>
              )}

              {/* Anagram (Sentence Type): Show with option prefixes */}
              {type === "ANAGRAM" && anagramType === "SENTENCE" && blocks && (
                <List>
                  {blocks.map((block, idx) => {
                    const [_idb, text, showInOption] = block;
                    return (
                      showInOption && (
                        <ListItem key={_idb}>
                          <ListItemText primary={`${optionPrefix[idx]} ${text}`} />
                        </ListItem>
                      )
                    )
                  })}
                </List>
              )}

              {/* MCQ: Hide answer initially, show when toggled */}
              {type === "MCQ" && options && (
                <>
                  <List>
                    {options.map((option, idx) => {
                      // console.log(option);
                      const [ id , text ,isCorrectAnswer] = option;
                      
                      return (

                      <ListItem
                        key={idx}
                        sx={{
                          backgroundColor: showAnswers[_id] && isCorrectAnswer ? "#d4edda" : "inherit",
                          borderRadius: 1,
                        }}
                      >
                        <ListItemText primary={`${optionPrefix[idx]} ${text}`} />
                      </ListItem>
                    )})}
                  </List>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ marginTop: 2 }}
                    onClick={() => toggleAnswer(_id)}
                  >
                    {showAnswers[_id] ? "Hide Answer" : "Show Answer"}
                  </Button>
                </>
              )}

              {/* Toggle answer button */}
              {solution && type !== "MCQ" && (
                <Button
                  variant="contained"
                  size="small"
                  sx={{ marginTop: 2 }}
                  onClick={() => toggleAnswer(_id)}
                >
                  {showAnswers[_id] ? "Hide Answer" : "Show Answer"}
                </Button>
              )}

              {/* Show answer if toggled */}
              {showAnswers[_id] && solution && type !== "MCQ" && (
                <Typography variant="body2" sx={{ marginTop: 2, fontStyle: "italic" }}>
                  Answer: {solution}
                </Typography>
              )}
            </CardContent>
          </Card>
        )
      })}
    < ToastContainer/> 
    </Box>

  );
};

export default QuestionList;
