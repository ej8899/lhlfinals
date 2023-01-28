import React, { useState } from "react";

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Paper, Toolbar, Box, Grid } from "@mui/material";

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


function CookiesConsentModal() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    // set a cookie to remember the user accepted the cookies
    // or update your local storage
  };

  // TODO - align cookie center vertical

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={useStyles.modal}
    >
      <div className={useStyles.paper}>
        <Box sx={mstyle}>
        <Grid sx={{ border: "0px solid red" }} container spacing={2} justifyContent="center" >
        <Grid item 
                  align="left"
                  direction="row"
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
                  direction="row"
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
        <div>
          <span>
          
        </span>
        <span>
        
        </span>
      </div>
        
        <div >
          <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained" color="primary" className={useStyles.acceptButton} onClick={handleClose}>
            Accept
          </Button>&nbsp;
          <Button variant="outlined" color="primary" onClick={handleClose}>
            Decline
          </Button>
          </Toolbar>
        </div>
        </Box>
      </div>
    </Modal>
  );
}

export default CookiesConsentModal;
