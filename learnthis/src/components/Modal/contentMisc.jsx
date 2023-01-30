import React, { useState } from "react";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Paper, Toolbar, Box, Grid } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';



//
// cookies modal
//
export function modalCookiesMessage(data) {
  const mstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 5,
  };

  return (

  <div>
  <Grid sx={{ border: "0px solid red" }} container spacing={2} justifyContent="center" >
  <Grid item 
            align="left"
            
            alignItems="flex-end"
            justify="center" 
            >
    <Paper sx={{ border: "0px solid red", boxShadow: "none", alignItems: "center", textAlign: "center" }}><img
      className="fashadow "
      src="./images/cookie.svg"
      alt="myCookie"
      width="150"
      height="150"
    /></Paper>
  </Grid>
  <Grid item xs={8} 
            container
            align="left"
            
            alignItems="flex-end"
            justify="center"
            >
    <Paper sx={{ border: "0px solid red", boxShadow: "none" }}>
      <Typography variant="h6">
    This website uses cookies to enhance the user experience.
  </Typography>
  <Typography variant="body1">
    By continuing to browse the site, you are agreeing to our use of cookies.<br/>&nbsp;
  </Typography>
  </Paper>
  </Grid>
  </Grid>

  </div>
  

  );
}

//
// about app modal
//
// TODO - modal content - fill out "about the app"
export function modalAboutMessage() {
  return (
  <div>
<Typography gutterBottom>
  ABOUT DIALOG CONTENT
            descript PERN stack
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
  </div>
  );
}


//
// privacy policy modal
//
export function modalPrivacyPolicy() {
  return (
    <div>
  <Typography gutterBottom>
    privacy policy DIALOG CONTENT
              
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla.
            </Typography>
    </div>
    );
}

//
// application release notes modal
//
export function modalReleaseNotes() {
  return (
    <div>
  <Typography gutterBottom>
    app release notes DIALOG CONTENT (NEEDS TO SCROLL)
              
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla.
            </Typography>
    </div>
    );
}

//
// application release notes modal
//
// TODO - modal content - fill out "about tthe team"
export function modalAboutTeam() {
  return (
    <div>
  <Typography gutterBottom>
    about the dev team here - links to github and linked in accounts
              
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla.
            </Typography>
    </div>
    );
}