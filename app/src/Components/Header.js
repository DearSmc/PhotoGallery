import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LogoutIcon from "@mui/icons-material/Logout";
function Header() {
  const handleBack = () => {
    console.log("Back");
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
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
          to="/home"
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
        <Link
          to="/home"
          underline="none"
          style={{
            fontWeight: "bold",
            fontSize: 25,
            textDecoration: "none",
            color: "black",
          }}
        >
          {"Banner"}
        </Link>
        <Link
          to="/login"
          style={{
            position: "absolute",
            height: 30,
            width: 30,
            right: 10,
            textDecoration: "none",
            color: "black",
          }}
        >
          <LogoutIcon
            sx={{
              height: 30,
              width: 30,
            }}
            onClick={handleLogout}
          />
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
