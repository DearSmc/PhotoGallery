import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import Snackbar from "@mui/material/Snackbar";

import { red, blue } from "@mui/material/colors";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../Contexts/UserContext";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [alert, setAlert] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    if (validate()) {
      const { email, password } = values;
      const payload = {
        email,
        password,
      };
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/login`, payload)
        .then((res) => {
          const accessToken = res.data.access_token;
          localStorage.setItem("accessToken", accessToken);
          axios
            .get(`${process.env.REACT_APP_API_URL}/users/session`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
            .then((res) => {
              const { userId, firstName, lastName, email, photo } = res.data;
              setUser({ userId, firstName, lastName, email, photo });
              navigate("/home");
            })
            .catch((err) => {
              console.log("Cannot get session");
            });
        })
        .catch(() => {
          setAlert(true);
        });
    } else {
      console.log("check it again");
      setAlert(true);
    }
  };

  function validate() {
    let emailValid = values.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    let passwordValid = values.password.length > 4;
    return emailValid && passwordValid;
  }

  return (
    <div>
      <Snackbar
        open={alert}
        autoHideDuration={6000}
        onClose={() => {
          setAlert(false);
        }}
      >
        <Alert
          onClose={() => {
            setAlert(false);
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          Please check your email and password
        </Alert>
      </Snackbar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          flexDirection: "row",
          alignItems: "start",
          width: 1,
          height: 1,
        }}
      >
        <img
          src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="welcome"
          style={{ height: "100vh", objectFit: "cover" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            alignItems: "center",
            width: "40vw",
            height: "100vh",
            backgroundColor: "white",
          }}
        >
          <Typography variant="h3" component="div" sx={{ mt: 8, mb: 10 }}>
            Login
          </Typography>
          <Box
            component="form"
            sx={{
              m: 1,
              width: "30ch",
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
          >
            <Box
              sx={{
                mb: 3,
              }}
            >
              <InputLabel htmlFor="standard-adornment-Email">Email</InputLabel>
              <Input
                type="text"
                label="Email"
                variant="standard"
                color="primary"
                placeholder="Input your email"
                value={values.email}
                onChange={handleChange("email")}
                fullWidth
              />
            </Box>
            <Box
              sx={{
                mb: 3,
              }}
            >
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                type={values.showPassword ? "text" : "password"}
                label="Password"
                variant="standard"
                color="primary"
                placeholder="Input your password"
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                fullWidth
              />
            </Box>
            <Button variant="contained" sx={{ mb: 4 }} onClick={handleLogin}>
              LOGIN
            </Button>

            {/* <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: 4,
              }}
            >
              <Typography variant="subtitle1" component="div">
                Login with
              </Typography>

              <Box sx={{ m: 1 }} fullWidth>
                <GoogleIcon fontSize="large" sx={{ color: red[600], mx: 1 }} />
                <FacebookIcon
                  fontSize="large"
                  sx={{ color: blue[700], mx: 1 }}
                />
              </Box>
            </Box> */}

            <Typography variant="caption" sx={{ textAlign: "center" }}>
              don’t have an account?{" "}
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                SIGN UP
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
