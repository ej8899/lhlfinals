import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from "react-router-dom";
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { CloseModal } from '../Icons/close';
import Button from '@mui/material/Button';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 15,
  borderTopLeftRadius: 15,
  borderTopRightRadius: 5,
  boxShadow: 24,
  p: 4,
};

//-------------------------------------------------------------------
// TODO pass props to this component w data
export const AddNewResource= (props) => {

  return (
    <Modal
      aria-labelledby="detail-modal-title"
      aria-describedby="detail-modal-description"
      open={props.open}
      onClose={props.handleNewResourceClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box sx={style}>
        <Box display="flex" width="100%" justifyContent="space-between" gap="2rem">
          <Typography variant="h5" style={{ marginLeft : 8, marginBottom : 10}}>
            Add New Resource
          </Typography>
          <CloseModal handleClose={props.handleNewResourceClose}/>
        </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              m: 2
            }}
          >
            <TextField 
              fullWidth 
              label="New Resource URL" 
              id="fullWidth" 
              value={props.newURL} 
              onChange={(event) => props.setNewURL(event.target.value)}
            />
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" href="" onClick={() => props.handleNewResourceClose()} >
            Add
          </Button>
          </Box>
      </Box>
    </Modal>
  );
}

