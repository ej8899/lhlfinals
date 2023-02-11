import React, { useEffect, useState } from 'react'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import axios from "axios";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

// userauth
import { useContext } from 'react';
import { AuthContext } from '../hooks/handleUsers.js';
import { login,logout } from '../hooks/handleUsers.js';
import IconStatus from '../hooks/iconStatus'

import zlog from '../helpers/zlog.js';

// TODO - add a "close" button to this modal box
// TODO - add the content for 'singup'
// TODO - add the content for 'forgot'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        {global.config.appName}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO - sign UP link needs to work

const Login=(props)=>{
  const {allIcon} = IconStatus;
  const [emaildata, setEmailData] = React.useState(localStorage.getItem("defaultemail") || "");
  const [passworddata, setPasswordData] = React.useState("");
  const handleEmailChange = (event) => {
    setEmailData(event.target.value);
    setErrorLogin(false)
  };

  const handlePasswordChange = (event) => {
    setPasswordData(event.target.value);
    setErrorLogin(false)
  };

  // rememberMe
  const [rememberMe, setRememberMe] = useState(
    localStorage.getItem("rememberMe") === "true"
  );
  const [rememberMeEmail, setRememberMeEmail] = useState(
    localStorage.getItem("defaultemail") === ""
  );
  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
    localStorage.setItem("rememberMe", event.target.checked);
  };
  let storeduser = "";

  React.useEffect(() => {
    if(rememberMe) {
      storeduser = localStorage.getItem("defaultemail");
    }
    setRememberMeEmail(storeduser)
    setEmailData(localStorage.getItem("defaultemail") || "")
  }, []);

    // userauth
    const { login, errorBlankEmail, setErrorBlankEmail, errorBlankPassword, setErrorBlankPassword, errorLogin, setErrorLogin } = useContext(AuthContext);
    // zlog('info',"authLOGIN:",login)

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);

      const email = data.get('email');
      const password = data.get('password')

      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
        localStorage.setItem("defaultemail",email)
      } else {
        localStorage.removeItem("rememberMe");
        localStorage.removeItem("defaultemail");
      }

      login({"email": email, "password": password}, close, props.setsampledata, props.sampledata, props.combinedData, props.setClearFilter, props.setLoading)
    };

    const close = () => {
      props.close()
      setErrorBlankEmail(false)
      setErrorBlankPassword(false)
      setPasswordData("")
      setErrorLogin(false)
      setEmailData(localStorage.getItem("defaultemail") || "")
    }

  return(
    <BootstrapDialog
        onClose={() => close()}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >

    <Container component="main" maxWidth="xs" sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {!errorBlankEmail &&
              <TextField
                margin="normal"
                autoFocus
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleEmailChange}
                value={emaildata}
                sx={{marginBottom: "2em"}}
              />
            }
            {errorBlankEmail &&
              <TextField
                margin="normal"
                required
                error
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(event) => (setEmailData(event.target.value), setErrorBlankEmail(false), setErrorLogin(false))}
                value={emaildata}
                helperText="Email Cannot Be Blank."
              />
            }
            {!errorBlankPassword &&
              <TextField
                margin="normal"
                autoFocus
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                name="password"
                onChange={handlePasswordChange}
                value={passworddata}
                autoComplete="current-password"
                sx={{marginBottom: "2em"}}
              />
            }
            {errorBlankPassword &&
              <TextField
                margin="normal"
                required
                fullWidth
                error
                label="Password"
                type="password"
                id="password"
                value={passworddata}
                name="password"
                autoComplete="current-password"
                onChange={(event) => (handlePasswordChange(event), setErrorBlankPassword(false), setErrorLogin(false))}
                helperText="Password Cannot Be Blank"
              />
            }
            {errorLogin &&
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error" variant="filled">
                  <AlertTitle>Login Failed</AlertTitle>
                  The email and/or password entered is not recognized. 
                  Please try again or reset your password.
                </Alert>
              </Stack>
            }
            <FormControlLabel
              control={<Checkbox checked={rememberMe} value="remember" color="primary"/>}
              label="Remember me"
              onChange={handleRememberMeChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link sx={{"&:hover" : {cursor : "pointer"}}} variant="body2" onClick={() => close(props.setSOpen(true))}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </BootstrapDialog>
    )
};

export default Login;