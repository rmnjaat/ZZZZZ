import React, { useState } from "react";
import { Card, CardContent, Typography, Button, List, ListItem, ListItemText, Box, Stack } from "@mui/material";

const questions = [
  {
    _id: "665568f4ac3f6205c943a937",
    type: "ANAGRAM",
    anagramType: "WORD",
    blocks: [
      { text: "T", showInOption: true, isAnswer: true },
      { text: "O", showInOption: true, isAnswer: true },
      { text: "Y", showInOption: true, isAnswer: true },
    ],
    solution: "TOY",
    title: "Rearrange the letters to form a word",
  },
  {
    _id: "665519b43735a7caf45a31b9",
    type: "MCQ",
    options: [
      { text: "working", isCorrectAnswer: true },
      { text: "works", isCorrectAnswer: false },
      { text: "work", isCorrectAnswer: false },
      { text: "worked", isCorrectAnswer: false },
    ],
    title: "I am very good at ______ under pressure and can meet tight deadlines.",
  },
  {
    _id: "6654efa73735a7caf459aa88",
    type: "ANAGRAM",
    anagramType: "SENTENCE",
    blocks: [
      { text: "To wrap up,", showInOption: true, isAnswer: true },
      { text: "let's quickly go over", showInOption: true, isAnswer: true },
      { text: "the key aspects", showInOption: true, isAnswer: true },
      { text: "of our topic", showInOption: true, isAnswer: true },
      { text: "before I thank you all", showInOption: true, isAnswer: true },
      { text: "for being such an engaged audience.", showInOption: true, isAnswer: true },
    ],
    solution:
      "To wrap up, let's quickly go over the key aspects of our topic before I thank you all for being such an engaged audience.",
    title: "Rearrange the words to form a sentence",
  },
  {
    _id: "660431c611b1ef9f2e26ddcb",
    type: "CONTENT_ONLY",
    title: "We have a range in mind, but we can talk about it. What number do you have in mind?",
  },
  {
    _id: "66047b9a11b1ef9f2e2b206e",
    type: "READ_ALONG",
    title:
      "I also have some personal mementos around. Photos and small things I've collected. They make the space feel more like mine.",
  },
  {
    _id: "6603f22611b1ef9f2e20a07c",
    type: "CONVERSATION",
    title: "Expressing concerns about your child's homework to the principal.",
  },
];

const QuestionList = () => {
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (id) => {
    setShowAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const optionPrefix = ["a)", "b)", "c)", "d)", "e)", "f)"];

  return (
    <Box sx={{ padding: 3, maxWidth: 700, margin: "0 auto" }}>
      {questions.map((question, index) => (
        <Card
          key={question._id}
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
            Q{index + 1}
          </Typography>

          <CardContent>
            {/* Question Title */}
            <Typography variant="h6">{question.title}</Typography>
            <Typography variant="subtitle2" color="textSecondary" sx={{ marginBottom: 2 }}>
              Type: {question.type}
            </Typography>

            {/* Anagram (Word Type): Show in one line */}
            {question.type === "ANAGRAM" && question.anagramType === "WORD" && question.blocks && (
              <Stack direction="row" spacing={2}>
                {question.blocks.map((block, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      border: "1px solid #ccc",
                      padding: 1,
                      borderRadius: 1,
                      textAlign: "center",
                      minWidth: 40,
                    }}
                  >
                    {block.text}
                  </Box>
                ))}
              </Stack>
            )}

            {/* Anagram (Sentence Type): Show with option prefixes */}
            {question.type === "ANAGRAM" && question.anagramType === "SENTENCE" && question.blocks && (
              <List>
                {question.blocks.map((block, idx) => (
                  <ListItem key={idx}>
                    <ListItemText primary={`${optionPrefix[idx]} ${block.text}`} />
                  </ListItem>
                ))}
              </List>
            )}

            {/* MCQ: Hide answer initially, show when toggled */}
            {question.type === "MCQ" && question.options && (
              <>
                <List>
                  {question.options.map((option, idx) => (
                    <ListItem
                      key={idx}
                      sx={{
                        backgroundColor: showAnswers[question._id] && option.isCorrectAnswer ? "#d4edda" : "inherit",
                        borderRadius: 1,
                      }}
                    >
                      <ListItemText primary={`${optionPrefix[idx]} ${option.text}`} />
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ marginTop: 2 }}
                  onClick={() => toggleAnswer(question._id)}
                >
                  {showAnswers[question._id] ? "Hide Answer" : "Show Answer"}
                </Button>
              </>
            )}

            {/* Toggle answer button */}
            {question.solution && question.type !== "MCQ" && (
              <Button
                variant="contained"
                size="small"
                sx={{ marginTop: 2 }}
                onClick={() => toggleAnswer(question._id)}
              >
                {showAnswers[question._id] ? "Hide Answer" : "Show Answer"}
              </Button>
            )}

            {/* Show answer if toggled */}
            {showAnswers[question._id] && question.solution && question.type !== "MCQ" && (
              <Typography variant="body2" sx={{ marginTop: 2, fontStyle: "italic" }}>
                Answer: {question.solution}
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default QuestionList;
