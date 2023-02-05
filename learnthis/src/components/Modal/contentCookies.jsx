import React, { useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper, Toolbar, Box, Grid } from "@mui/material";

export function modalCookiesMessage(props) {
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
    <img
      className="fashadow "
      src="./images/cookie.svg"
      alt="myCookie"
      width="150"
      height="150"
    />
  </Grid>
  <Grid item xs={8} 
            container
            align="left"
            
            alignItems="flex-end"
            justify="center"
            >
    
      <Typography variant="h6">
    This website uses cookies to enhance the user experience.
  </Typography>
  <Typography variant="body1">
    By continuing to browse the site, you are agreeing to our use of cookies.<br/>&nbsp;
  </Typography>
  
  </Grid>
  </Grid>

  <div >
    <Toolbar sx={{ justifyContent: "flex-end" }}>
    <Button variant="contained" color="primary"  onClick={props.handleClose}>
      Accept
    </Button>&nbsp;
    <Button variant="outlined" color="primary" onClick={props.handleClose}>
      Decline
    </Button>
    </Toolbar>
  </div>
  </Box>
  </div>

  );
};
