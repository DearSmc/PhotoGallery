import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
function Header() {
  const handleBack = () => {
    console.log("Back");
  };

  return (
    <Box
      sx={{
        height: 40,
        width: 500,
        position: "fixed",
        top: 0,
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          height: 40,
          width: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 1,
          position: "relative",
          marginTop: 1,
          marginBottom: 1,
          backgroundColor: "white",
        }}
      >
        <Link
          to='/'
          style={{
            position: "absolute",
            height: 30,
            width: 30,
            left: 10,
            textDecoration: "none",
            color: "black",
          }}
        >
          <KeyboardBackspaceIcon
            sx={{
              height: 30,
              width: 30,
            }}
            onClick={handleBack}
          />
        </Link>
        <p style={{ fontWeight: "bold", fontSize: 25 }}>Banner</p>
      </Box>
    </Box>
  );
}

export default Header;
