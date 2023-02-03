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


//-------------------------------------------------------------------
import MultilineTextFields from '../ItemDetail/commentbox';
import InputWithIcon from '../ItemDetail/emailbox';
//-------------------------------------------------------------------


import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


//-------------------------------------------------------------------
// Import Icons Functions
import { CloseModal } from '../Icons/close';
import { Tooltip } from '@mui/material';
//-------------------------------------------------------------------

//-------------------------------------------------------------------
// Copy to Clipboard & Share
import CopyToClipboardButton from '../Icons/copyclipboard';
import Button from '@mui/material/Button';
//-------------------------------------------------------------------

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
export const StatusModal= (props) => {

  return (
    <Modal
      aria-labelledby="detail-modal-title"
      aria-describedby="detail-modal-description"
      open={props.open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box sx={style}>
        <Box display="flex" width="100%" justifyContent="space-between" gap="2rem">

        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="primary" />
        </Stack>
          <Typography variant='h6' textAlign="center">
            {props.message}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}
