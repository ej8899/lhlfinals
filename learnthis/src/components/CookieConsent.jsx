import React, { useState } from "react";

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Paper, Toolbar, Box, Grid } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
console.log("COOKIE MODAL")
const useStyles = {
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    //backgroundColor: theme.palette.background.paper,
    //boxShadow: theme.shadows[5],
    //padding: theme.spacing(2, 4, 3),
    width: "40%",
    minWidth: "300px"
  },
  acceptButton: {
    //marginRight: theme.spacing(2)
  }
};

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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function CookiesConsentModal(props) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    // set a cookie or localstorage to remember the user accepted the cookies
    // or update your local storage
  };

  // TODO - align cookie center vertical
  // TODO - if dark mode start, cookies modal "paper" is lighter color than modal background or perhaps "box" - need to fix!

  return (
    
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
     
      </BootstrapDialog>
  );
}

export default CookiesConsentModal;
