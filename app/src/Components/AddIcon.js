import React from "react";
import Box from "@mui/material/Box";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

function AddIcon() {
  return (
    <Box
      sx={{
        borderRadius: "100%",
        height: 60,
        width: 60,
        backgroundColor: "white",
        boxShadow: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        right: 40,
        zIndex: 1,
      }}
    >
      <AddPhotoAlternateIcon sx={{ width: 40, height: 40 }} />
    </Box>
  );
}

export default AddIcon;
