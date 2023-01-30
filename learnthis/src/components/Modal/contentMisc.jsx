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
export function modalAboutMessage() {
  return (
  <div>
<Typography gutterBottom>
  ABOUT DIALOG CONTENT
            
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


export function modalCookiesMessageEnhance() {
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

  <div Style={{border: "1px solid red"}}>
  <Box sx={mstyle}>
  <Grid sx={{ border: "1px solid red" }} container spacing={2} justifyContent="center" >
  <Grid item 
            align="left"
            
            alignItems="flex-end"
            justify="center" 
            >
    <Paper sx={{ border: "1px solid red", boxShadow: "none", alignItems: "center", textAlign: "center" }}><img
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

  </Box>
  </div>

  );
};


//
// privacy policy modal
//
export function modalPrivacyPolicy() {
  let styles = {
    fontSize: "6rem",
    color: "orange",
  };
  let mymodalMessage = (
    <div>
      <div align="center">
        <i className="fashadow fa-solid fa-lock" style={styles}></i>
        <br />
        <br />
        <h2 className="glitchyshadow">Privacy Policy</h2>
        <br />
        Nullam cursus velit ac dui cursus hendrerit. Proin malesuada erat eu
        tempus sagittis. Pellentesque sit amet odio at mauris tristique egestas
        at vulputate mauris. Duis eget est eu neque accumsan fringilla in at
        mauris. Donec molestie libero sem, et mattis tellus porttitor quis.
        Nulla ut dolor quis nibh maximus venenatis. Vestibulum iaculis tempus
        commodo. Nulla tincidunt dolor mauris, quis eleifend massa commodo in.
        Nulla vehicula neque nec malesuada eleifend. Vivamus sagittis ornare
        risus, vel semper purus aliquam nec. Donec porttitor elit sem, vel
        rhoncus diam vulputate sed.
        <br />
        <br />
      </div>
    </div>
  );

  const settings = {
    message: mymodalMessage,
    button:"agree",
    show:true,
    settings: { 
      noAbort: true, 
  },
  };

  return settings;
}

//
// application release notes modal
//
export function modalReleaseNotes() {
  let styles = {
    fontSize: "6rem",
    color: "orange",
  };
  let mymodalMessage = (
    <div>
      <div align="center">
        <i className="fashadow fa-solid fa-file-lines" style={styles}></i>
        <br />
        <br />
        <h2 className="glitchyshadow">Release Notes:</h2>
        <br/>
  
        <code style={{display: "inline-block",textAlign: "left"}}>
        v1.0:<br/>
        - Websocket Support<br/>&nbsp;&nbsp;(auto updates across all open instances)<br/>
        - Dark & Light mode toggle<br/>
        - Drag and Drop to adjust schedules<br/>
        </code>

        <br />
      </div>
    </div>
  );

  const settings = {
    message: mymodalMessage,
    button:"ok",
    show:true,
    settings: { 
      noAbort: true, 
  },
  };

  return settings;
}

//
// drag and drop WIP modal
//
export function dragndropMessage() {
  let styles = {
    fontSize: "6rem",
    color: "orange",
  };
  const mymodalMessage = (
    <div align="center">
      <i className="fashadow fa-solid fa-circle-exclamation" style={styles}></i>
      <br />
      <br />
      <big>
        Hang tight...<br/>
        Drag & drop is under construction!
      </big>
      <br />
      <br />
    </div>
  );

  const settings = {
      message:mymodalMessage,
      button:"",
      show:true,
      settings: { 
        noAbort: false, 
      },
    };

  return settings;
}