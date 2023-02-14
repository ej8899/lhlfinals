// --------------------------------------------------------
// React Imports
import React, {useState} from 'react';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports
import DeleteIcon from '@mui/icons-material/Delete';
// --------------------------------------------------------

//-------------------------------------------------------------------
// Import Icons Functions
import { CloseModal } from '../Icons/close';
//-------------------------------------------------------------------

//-------------------------------------------------------------------
// Import missing image
import missingimage from "../../missingimage.png"
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
  borderColor: "error.main"
};

//-------------------------------------------------------------------
// TODO pass props to this component w data
export const DeleteModal= (props) => {

  return (
    <Modal
      aria-labelledby="detail-modal-title"
      aria-describedby="detail-modal-description"
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      disableScrollLock={true}
    >
      <Box sx={style}>
        <Box display="flex" width="100%" justifyContent="space-between" gap="2rem">
          <Typography variant='h6' textAlign="center">
            Delete Resource
          </Typography>
          <Box>
            <CloseModal handleClose={props.handleClose}/>
          </Box>
        </Box>
        <Typography style={{ marginLeft : 8, marginBottom : 10}}>
        {props.title}
        </Typography>
        <Box display="flex" width="100%" justifyContent="space-around" flexDirection="column" >
          <Box display="flex" width="100%" justifyContent="center" >
            <Box display="flex" width="55%" justifyContent="center">
              <CardMedia
                component="img"
                height="140"
                width="345"
                image={props.thumbnail}
                src={ 'https://via.placeholder.com/345x140.png/F2D2BD?text=Image+Not+Yet+Available '}
                sx={{marginBottom : 2}}
              />
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography>
              Are you sure you want to delete the resource?
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-evenly" sx={{ m: 2 }}>
            <Button variant="contained" href="" onClick={() => props.handleClose()} >
              Cancel
            </Button>
            <Button variant="outlined" sx={{color: "red", borderColor : "red", "&:hover" : {backgroundColor : "lightpink", borderColor : "red"}}} onClick={() => props.handleClose(props.handleOpenDeleting())} startIcon={<DeleteIcon />}>
                Delete
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
