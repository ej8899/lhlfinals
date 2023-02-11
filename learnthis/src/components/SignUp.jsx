import * as React from 'react';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

import { AuthContext } from '../hooks/handleUsers.js';
import { useContext } from 'react';
import IconStatus from '../hooks/iconStatus'

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

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

const theme = createTheme();

export default function SignUp(props) {

  const {allIcon} = IconStatus;
  const [emaildata, setEmailData] = React.useState("");
  const [passworddata, setPasswordData] = React.useState("");
  const [firstnamedata, setfirstnamedata] = React.useState("");
  const [lastnamedata, setlastnamedata] = React.useState("");

  
  // userauth
  const { 
    createUser, 
    errorBlankEmail, 
    setErrorBlankEmail, 
    errorBlankPassword, 
    setErrorBlankPassword, 
    errorCreateUser, 
    setErrorCreateUser,
    errorBlankFirstname,
    errorBlankLastname,
    setErrorBlankFirstname,
    setErrorBlankLastname, } = useContext(AuthContext);

  const handleEmailChange = (event) => {
    setEmailData(event.target.value);
    setErrorBlankEmail(false)
    setErrorCreateUser(false)
  };

  const handlePasswordChange = (event) => {
    setPasswordData(event.target.value);
    setErrorBlankPassword(false)
    setErrorCreateUser(false)
  };

  const handleFirstnameChange = (event) => {
    setfirstnamedata(event.target.value);
    setErrorBlankFirstname(false)
    setErrorCreateUser(false)
  };

  const handleLastnameChange = (event) => {
    setlastnamedata(event.target.value);
    setErrorBlankLastname(false)
    setErrorCreateUser(false)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const firstname = data.get('firstName') 
      const lastname = data.get('lastName')
      const email = data.get('email')
      const password = data.get('password')

    createUser({"email": email, "password": password, 'firstname': firstname, 'lastname': lastname}, close, props.setsampledata, props.sampledata, props.combinedData, props.setClearFilter, props.setLoading)
  };

  const close = () => {
    props.close()
    setErrorBlankEmail(false)
    setErrorBlankPassword(false)
    setErrorBlankFirstname(false)
    setErrorBlankLastname(false)
    setfirstnamedata("")
    setlastnamedata("")
    setPasswordData("")
    setErrorCreateUser(false)
    setEmailData("")
  }

  // TODO - sign IN link needs to work

  return (
    <BootstrapDialog
        onClose={() => close()}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                {!errorBlankFirstname &&
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={handleFirstnameChange}
                    value={firstnamedata}
                    sx={{marginBottom: "1.4em"}}
                  />
                }
                {errorBlankFirstname &&
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    error
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={handleFirstnameChange}
                    value={firstnamedata}
                    helperText="Name Cannot Be Blank."
                  />
                }

              </Grid>
              <Grid item xs={12} sm={6}>
                {!errorBlankLastname &&
                  <TextField
                    autoComplete="given-name"
                    name="lastName"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    autoFocus
                    onChange={handleLastnameChange}
                    value={lastnamedata}
                    sx={{marginBottom: "1.4em"}}
                  />
                }
                {errorBlankLastname &&
                  <TextField
                    autoComplete="given-name"
                    name="lastName"
                    required
                    error
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    autoFocus
                    onChange={handleLastnameChange}
                    value={lastnamedata}
                    helperText="Name Cannot Be Blank."
                  />
                }
              </Grid>
              <Grid item xs={12}>
                {!errorBlankEmail &&
                  <TextField
                    autoFocus
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleEmailChange}
                    value={emaildata}
                    sx={{marginBottom: "1.5em"}}
                  />
                }
                {errorBlankEmail &&
                  <TextField
                    autoFocus
                    required
                    fullWidth
                    error
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleEmailChange}
                    value={emaildata}
                    helperText="Email Cannot Be Blank"
                  />
                }
              </Grid>
              <Grid item xs={12}>
                {!errorBlankPassword &&
                  <TextField
                    required
                    autoFocus
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={handlePasswordChange}
                    value={passworddata}
                    sx={{marginBottom: "1.5em"}}
                  />
                }
                {errorBlankPassword &&
                  <TextField
                    required
                    autoFocus
                    fullWidth
                    error
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={handlePasswordChange}
                    value={passworddata}
                    helperText="Password Cannot Be Blank"
                  />
                }
                {errorCreateUser &&
                  <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error" variant="filled">
                      <AlertTitle>Sign Up Failed</AlertTitle>
                      The email entered is already registered. 
                      Please try again or &nbsp;
                        <Link sx={{"&:hover" : {cursor : "pointer"}}} variant="body2" onClick={() => close(props.setLOpen(true))}>
                          Sign in
                        </Link>
                    </Alert>
                  </Stack>
                }
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link sx={{"&:hover" : {cursor : "pointer"}}} variant="body2" onClick={() => close(props.setLOpen(true))}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
       </BootstrapDialog>
  );
}