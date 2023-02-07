// --------------------------------------------------------
// React Imports
import React, {useState, useContext} from 'react';
// --------------------------------------------------------

//---------------------------------------------------------
// Import user filter
import { FilterContext } from "../../helpers/filter";
import { AuthContext } from "../../hooks/handleUsers.js";
//---------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
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
export const ResultModal= (props) => {

  const { filterData } = useContext(FilterContext);
  const { isAuth, user, userid, logout } = useContext(AuthContext);

  return (
    <Modal
      aria-labelledby="detail-modal-title"
      aria-describedby="detail-modal-description"
      open={props.open}
      onClose={props.handleClose}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      disableScrollLock={true}
    >
      <Box sx={style}>
        <Box display="flex" width="100%" justifyContent="space-between" gap="2rem">
        <Typography variant="h5" style={{ marginLeft : 8, marginBottom : 10}}>
            {props.title}
          </Typography>
          <Box>
            <CloseModal handleClose={props.handleClose}/>
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
                alt={props.title}
                sx={{marginBottom : 2}}
              />
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography variant="h6" textAlign="center">
              {props.message}
            </Typography>
            <Typography variant="body2" textAlign="center">
              Checkout &nbsp; <b>
                <a onClick={() => props.handleClose(filterData("mine", userid, props.setsampledata, props.sampledata, props.combinedData), props.handleReviewClose())} style={{color: "purple", cursor: "pointer", "&:hover" : {color: "green"}}}>'My Resources'</a> 
                </b> &nbsp; for resources you've added.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
