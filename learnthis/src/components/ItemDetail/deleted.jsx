// --------------------------------------------------------
// React Imports
import React, {useState} from 'react';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports
// --------------------------------------------------------

// --------------------------------------------------------
// Import Manual Field Functions
// --------------------------------------------------------

// --------------------------------------------------------
// Import Helper Functions
// --------------------------------------------------------

// --------------------------------------------------------
// Import Icons Functions
import { CloseModal } from '../Icons/close';
// --------------------------------------------------------

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

// TODO - bottom where my resource - add anchor to link?
export const DeletedModal= (props) => {

  return (
    <Modal
      aria-labelledby="detail-modal-title"
      aria-describedby="detail-modal-description"
      open={props.open}
      onClose={() => props.handleClose()}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      disableScrollLock={true}
    >
      <Box sx={style}>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" sx={{gap: 3}}>
          <Alert variant="outlined" severity="success">
            {props.message}
          </Alert>
          <CloseModal handleClose={props.handleClose}/>
        </Box>

      </Box>
    </Modal>
  );
}
