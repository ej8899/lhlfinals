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
import Alert from '@mui/material/Alert';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports
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
  minWidth: "450px",
};

export const SharedModal= (props) => {

  return (
    <Modal
      aria-labelledby="detail-modal-title"
      aria-describedby="detail-modal-description"
      open={props.open}
      onClose={props.handleSharedClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      disableScrollLock={true}
      
    >
      <Box sx={style} variant="outlined" severity="info">
        <Box display="flex" width="100%"  justifyContent="space-between" gap="2rem">
          <Typography variant="h5" style={{ marginLeft : 8, marginBottom : 10}}>
            {props.title}
          </Typography>
          <Box>
            <CloseModal handleClose={props.handleSharedClose}/>
          </Box>
        </Box>
        <Box display="flex" width="100%" justifyContent="space-around" flexDirection="column" >
          <Box display="flex" width="100%" justifyContent="center" >
            <Box display="flex" width="55%" justifyContent="center">
              <CardMedia
                component="img"
                height="140"
                width="345"
                image={props.thumbnail}
                src={'https://via.placeholder.com/345x140.png/F2D2BD?text=Sorry+Not+Available'}
                sx={{marginBottom : 2}}
              />
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Alert variant="outlined" severity="success">
              Resource was shared with: {props.emailTo}
            </Alert>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
