import React, { useState } from "react";
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
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import Icon from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import Tooltip from "@mui/material/Tooltip";
import { red, blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    Fname: "",
    Lname: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const [image, setImage] = useState("");

  const [alert, setAlert] = useState(false);
  const [errMSG, setErrMSG] = useState([]);

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

  function clearErrMessage() {
    // console.log("Last error", errMSG);
    errMSG.length = 0;
  }

  const handleLogin = async () => {
    let isCorrect = await validate();
    if (isCorrect) {
      console.log("call sign up function");
      navigate("/login");
    } else {
      console.log("check it again", errMSG);
      setAlert(true);
    }
  };

  function validate() {
    clearErrMessage();
    let imageValid = image !== "";
    let emailValid =
      values.email.length > 0 &&
      values.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    let passwordValid = values.password.length > 4;
    let FnameValid = values.Fname.length > 0;
    let LnameValid = values.Lname.length > 0;

    if (!imageValid) errMSG.push("please upload your profile image");
    if (!FnameValid) errMSG.push("please fill your First name");
    if (!LnameValid) errMSG.push("please fill your Last name");
    if (!emailValid)
      errMSG.push("your fill your email in format email@something.xx");
    if (!passwordValid)
      errMSG.push("your password must have more than 4 letter");

    return (
      imageValid && emailValid && passwordValid && FnameValid && LnameValid
    );
  }

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

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
          {errMSG[0]}
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
          src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
          <Typography variant="h3" component="div" sx={{ mt: 8, mb: 5 }}>
            Sign Up
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
            <Button variant="contained" component="label" sx={{ mb: 3 }}>
              Upload Profile Image <SwitchAccountIcon sx={{ ml: 1 }} />
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                style={{ display: "none", visibility: "none" }}
                onChange={imageHandler}
                hidden
              />
            </Button>

            <Box
              sx={{
                mb: 3,
              }}
            >
              <InputLabel htmlFor="standard-adornment-Fname">
                First name
              </InputLabel>
              <Input
                type="text"
                label="First name"
                variant="standard"
                color="primary"
                placeholder="Input your First name"
                value={values.Fname}
                onChange={handleChange("Fname")}
                fullWidth
              />
            </Box>
            <Box
              sx={{
                mb: 3,
              }}
            >
              <InputLabel htmlFor="standard-adornment-Lname">
                Last name
              </InputLabel>
              <Input
                type="text"
                label="Last name"
                variant="standard"
                color="primary"
                placeholder="Input your Last name"
                value={values.Lname}
                onChange={handleChange("Lname")}
                fullWidth
              />
            </Box>
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
              Create an account
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
                Create an account with
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
              Have an account?{" "}
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  navigate("/login");
                }}
              >
                LOGIN
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
