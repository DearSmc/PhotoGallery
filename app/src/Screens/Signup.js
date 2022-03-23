import React from "react";
import { useFormik } from "formik";
import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Link,
  Paper,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        SPA Project
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const SignupForm = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      photo: null,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <TextField
              margin="normal"
              required
              id="lastName"
              label="Last Name"
              name="lastName"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            <Copyright sx={{ mt: 5 }} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
