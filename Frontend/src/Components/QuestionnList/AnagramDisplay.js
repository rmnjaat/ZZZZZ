import React from "react";
import { Stack, List, ListItem, ListItemText, Box } from "@mui/material";

const AnagramDisplay = ({ anagramType, blocks }) => {
  const optionPrefix = ["a)", "b)", "c)", "d)", "e)", "f)"];

  if (anagramType === "WORD") {
    return (
      <Stack direction="row" spacing={2}>
        {blocks.map(([id, text, showInOption]) => (
          showInOption && (
            <Box key={id} sx={{ border: "1px solid #ccc", padding: 1, borderRadius: 1, textAlign: "center", minWidth: 40 }}>
              {text}
            </Box>
          )
        ))}
      </Stack>
    );
  }

  if (anagramType === "SENTENCE") {
    return (
      <List>
        {blocks.map(([id, text, showInOption], idx) => (
          showInOption && (
            <ListItem key={id}>
              <ListItemText primary={`${optionPrefix[idx]} ${text}`} />
            </ListItem>
          )
        ))}
      </List>
    );
  }

  return null;
};

export default AnagramDisplay;
