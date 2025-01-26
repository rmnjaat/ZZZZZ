import React from "react";
import { Card, Typography, CardContent } from "@mui/material";
import QuestionContent from "./QuestionContent";

const QuestionCard = ({ question, questionNumber, showAnswers, toggleAnswer }) => {
    const [_id, type, title, siblingId, options, blocks, anagramType, solution] = question;


    //Title and question is in all type question and other are optional
    return (
        <Card
            sx={{
                marginBottom: 3,
                boxShadow: 2,
                position: "relative",
                paddingTop: "30px",
            }}
        >
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
                Q{questionNumber}
            </Typography>
                
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="subtitle2" color="textSecondary" sx={{ marginBottom: 2 }}>
                    Type: {type} {anagramType}
                </Typography>
                <QuestionContent
                    type={type}
                    anagramType={anagramType}
                    blocks={blocks}
                    options={options}
                    solution={solution}
                    showAnswer={showAnswers[_id]}
                    toggleAnswer={() => toggleAnswer(_id)}
                />
            </CardContent>
        </Card>
    );
};

export default QuestionCard;
