import React from "react";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
function HeaderHome() {
  const handleBack = () => {
    console.log("Go");
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
          to='/profile'
          style={{
            position: "absolute",
            height: 30,
            width: 30,
            right: 10,
            textDecoration: "none",
            color: "black",
          }}
        >
          <HomeIcon
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

export default HeaderHome;