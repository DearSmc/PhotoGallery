import React, { useContext } from "react";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
function HeaderHome(props) {
  const { userId } = props;
  const handleBack = () => {};
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
          to={`/profile/${userId}`}
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
      </Box>
    </Box>
  );
}

export default HeaderHome;
