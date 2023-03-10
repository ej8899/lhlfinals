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
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
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
  borderColor: "info.main"
};

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
      disableScrollLock={true}
    >
      <Box sx={style}>
        <Box display="flex" width="100%" justifyContent="space-between" gap="2rem">
          {!props.wheel && 
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
              <CircularProgress color="primary" />
            </Stack>
          } 
          <Box display="flex" flexDirection="column">
            <Typography variant='h6' textAlign="center">
              {props.message}
            </Typography>
            {props.submessage &&
              <Typography variant='body1' textAlign="center">
                {props.submessage}
              </Typography>
            } 
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
