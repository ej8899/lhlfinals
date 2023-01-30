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
<Typography gutterBottom>
  ABOUT DIALOG CONTENT
            descript PERN stack
            <img src="./images/pernstack.png" alt="PERN stack"/>
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
            Privacy Policy

We are committed to protecting your privacy and personal information. This policy explains how we collect, use, and disclose your personal information when you use our website.
<br/>
Information we collect:

Information you provide to us directly, such as when you create an account, fill out a form, or make a purchase.
Information we collect automatically, such as your IP address, browser type, and device information.
Information from third-party sources, such as data from social media platforms.
How we use your information:

To provide and improve our services
To personalize your experience and show you relevant content
To communicate with you about your account and activities on our website
To comply with legal obligations
To detect and prevent fraud or other illegal activities
Sharing your information:
We may share your information with third parties for the following purposes:

To provide and improve our services
To comply with legal obligations
To detect and prevent fraud or other illegal activities
We do not sell or rent your personal information to third parties for their marketing purposes without your explicit consent.

Security:
We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet, or method of electronic storage, is 100% secure.

Your Rights:
You have the right to access, correct, update, and delete your personal information. You also have the right to request that we limit the use of your personal information, and to object to our processing of your personal information. To exercise these rights, please contact us.

Changes to this Policy:
We may update this policy from time to time. We will notify you of any changes by posting the new policy on our website.

Contact Us:
If you have any questions about this policy or our handling of your personal information, please contact us.

Last updated: [insert date]
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