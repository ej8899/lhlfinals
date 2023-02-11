import React, { useState } from "react";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Paper, Toolbar, Box, Grid } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
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
<Typography gutterBottom >
  
          <Box display="flex" alignItems="center" justifyContent="center"><img src="./images/pernstack.png" alt="PERN stack"/></Box>
          </Typography>
          <Typography gutterBottom mt={2}>
            <b>LearnThis!</b> has been developed with the PERN web development stack.  It is a resource collection tool and presenation system built for developers - beginners through to advanced students and developers.  With 'crowd-based' learning database, <b>LearnThis!</b> can present and even intelligently develop lesson plans suited to your skill level and interests.
          </Typography>
          <Typography gutterBottom mt={2}>
        With PostgreSQL as the backbone, you can trust in the security and reliability of your data. Express and Node.js effortlessly handle server-side operations and routing, allowing you to focus on the core functionality of your application. On the front-end, React shines with Material-UI, a library that imbues your application with a sleek, modern feel. Material-UI's highly responsive UI components are a perfect match for React's ability to manage and update the application state with ease.
          </Typography>
          
  </div>
  );
}


//
// privacy policy modal
//
export function modalPrivacyPolicy() {
  return (
    <Paper style={{ height: 400, overflow: 'auto' }}>
            <Typography gutterBottom>
            Privacy Policy
            <br/><br/>
We are committed to protecting your privacy and personal information. This policy explains how we collect, use, and disclose your personal information when you use our website.
<br/><br/>
Information we collect:
<br/><br/>
Information you provide to us directly, such as when you create an account, fill out a form, or make a purchase.<br/>
Information we collect automatically, such as your IP address, browser type, and device information.<br/>
Information from third-party sources, such as data from social media platforms.<br/>
<br/><br/>
How we use your information:
<br/><br/>
To provide and improve our services<br/>
To personalize your experience and show you relevant content<br/>
To communicate with you about your account and activities on our website<br/>
To comply with legal obligations<br/>
To detect and prevent fraud or other illegal activities<br/>
<br/><br/>
Sharing your information:<br/>
We may share your information with third parties for the following purposes:
<br/><br/>
To provide and improve our services<br/>
To comply with legal obligations<br/>
To detect and prevent fraud or other illegal activities<br/>
We do not sell or rent your personal information to third parties for their marketing purposes without your explicit consent.
<br/><br/>
Security:<br/>
We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet, or method of electronic storage, is 100% secure.
<br/><br/>
Your Rights:<br/>
You have the right to access, correct, update, and delete your personal information. You also have the right to request that we limit the use of your personal information, and to object to our processing of your personal information. To exercise these rights, please contact us.
<br/><br/>
Changes to this Policy:<br/>
We may update this policy from time to time. We will notify you of any changes by posting the new policy on our website.
<br/><br/>
Contact Us:<br/>
If you have any questions about this policy or our handling of your personal information, please contact us.
<br/><br/>
Last updated: [insert date]
            </Typography>
         
    </Paper>
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  
  color: theme.palette.text.primary,
}));

// TODO - modal content - fill out "about tthe team"
export function modalAboutTeam() {
  return (
    <div style= {{width:"500px", display:"table-cell"}}>
      <StyledPaper sx={{width:'100%'}}>
        <Grid container wrap="nowrap" spacing={2} sx={{width:'100%'}}>
          <Grid item>
          <IconButton aria-label="github">
          <GitHubIcon/>
          </IconButton><br/>
          <IconButton aria-label="linkedIn">
          <LinkedInIcon/></IconButton>
          </Grid>
          <Grid item xs>
            <Typography sx={{mt:3.2}}>
            <Divider flexItem textAlign="left" alignItems="flex-end">
            Atsuyuki Yoshimatsu
            </Divider>
            &nbsp;&nbsp;Back end: SQL, NodeJS, Express
            </Typography>
          </Grid>
          </Grid>
      </StyledPaper>
      <Divider variant="middle" />
      
      <StyledPaper sx={{width:'100%'}}>
        <Grid container wrap="nowrap" spacing={2}>
        <Grid item><IconButton aria-label="github">
          <GitHubIcon/></IconButton><br/>
          <IconButton aria-label="linkedIn">
          <LinkedInIcon/></IconButton>
          </Grid>
          <Grid item xs>
          <Typography sx={{mt:3.2}}>
            <Divider flexItem textAlign="left">
            Gene Tenorlas
            </Divider>
            &nbsp;&nbsp;Back end: SQL, NodeJS, Express
            </Typography>
          </Grid>
          </Grid>
      </StyledPaper>      

      <Divider variant="middle" />

      <StyledPaper sx={{width:'100%'}}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item><IconButton aria-label="github">
          <GitHubIcon/></IconButton><br/>
          <IconButton aria-label="linkedIn">
          <LinkedInIcon/></IconButton>
          </Grid>
          <Grid item xs>
          
          <Typography sx={{mt:3.2}}>
            <Divider flexItem textAlign="left">
            Ernie Johnson
            </Divider>
            &nbsp;&nbsp;Front End: Javascript, CSS, ReactJS, MaterialUI
            </Typography>
          </Grid>
          </Grid>
      </StyledPaper>
    </div>
    );
}



//
// privacy policy modal
//
export function modalCookiePolicy() {
  return (
    <Paper style={{ height: 400, overflow: 'auto' }}>
            <Typography gutterBottom>
            Cookies Policy
<br/><br/>
            Cookies Policy for [Website Name]
            <br/><br/>
[Website Name] uses cookies to enhance your browsing experience and provide a more personalized service. By using our website, you consent to our use of cookies in accordance with this policy.
<br/><br/>
What are Cookies?
Cookies are small text files that are placed on your device by websites that you visit. They are used to store information about your preferences and activity on the website.
<br/><br/>
Types of Cookies Used:
<br/><br/>
Essential Cookies: These cookies are necessary for the website to function properly and cannot be disabled.
Performance Cookies: These cookies collect information about how you use the website, such as which pages you visit and if you encounter any errors.
Functionality Cookies: These cookies remember your preferences and enhance your experience on the website, such as your preferred language or region.
Managing Cookies:
<br/><br/>
You may manage the use of cookies in your browser settings.
If you disable cookies, some features of the website may not be fully functional.
Changes to this Cookies Policy:
<br/><br/>
We may update this Cookies Policy from time to time to reflect changes in our practices or relevant laws. We will notify you of any material changes by posting the updated policy on our website.
Last updated: [Date]
            </Typography>
    </Paper>
    );
}