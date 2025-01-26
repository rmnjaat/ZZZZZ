import React, { useState } from "react";
import { Box, Skeleton } from "@mui/material";


export default function Skeletonn() {
    return (
        <Box sx={{ padding: 3, maxWidth: 700, margin: "0 auto" }}>
            <Skeleton variant="text" width="80%" height={40} />
            <Skeleton variant="rectangular" width="100%" height={118} sx={{ marginBottom: 2 }} />
        </Box>
    );
}