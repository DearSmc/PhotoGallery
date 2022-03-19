import React from "react";
import Box from "@mui/material/Box";
import CreateIcon from "@mui/icons-material/Create";

function UploadIcon(props) {
  const handleClose = props.handleClose;
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
        bottom: 20,
        right: 80,
      }}
      onClick={handleClose}
    >
      <CreateIcon sx={{ width: 40, height: 40 }} />
    </Box>
  );
}

export default UploadIcon;
