// --------------------------------------------------------
// React Imports
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports
import SendIcon from '@mui/icons-material/Send';
import CopyToClipboardButton from '../Icons/copyclipboard';
// --------------------------------------------------------

//-------------------------------------------------------------------
// Import Manual Field Functions
import MultilineTextFields from '../ItemDetail/commentbox';
import InputWithIcon from '../ItemDetail/emailbox';
//-------------------------------------------------------------------

//-------------------------------------------------------------------
// Import Helper Functions
import { isYoutubeUrl, getYoutubeVideoId } from '../../helpers/helpers';
//-------------------------------------------------------------------

//-------------------------------------------------------------------
// Import Icons Functions
import { CloseModal } from '../Icons/close';
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

export const ShareModal= (props) => {

  return (
    <Modal
      aria-labelledby="detail-modal-title"
      aria-describedby="detail-modal-description"
      open={props.open}
      onClose={props.handleShareClose}
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
            Share Resource
          </Typography>
          <Box>
            <CloseModal handleClose={props.handleShareClose}/>
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
                alt={props.title}
                sx={{marginBottom : 2}}
              />
            </Box>
          </Box>
          <Divider/>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <InputWithIcon label={"Email Address"} width={"38ch"} margin={0} botMargin={2} emailTo={props.emailTo} emailMyTo={props.emailMyTo} errorBlank={props.errorBlank} errorEmail={props.errorEmail} />
            <MultilineTextFields myComments={props.emailMessage} rows={3} width={"41ch"} label={'Message...'} placeholder={"Type Your Message Here"} margin={0} addMyComments={props.emailMyMessage} botMargin={0}/>
          </Box>
          <Box display="flex" justifyContent="flex-end" sx={{ m: 2 }}>
            <Button variant="contained" href="" onClick={() => props.sendEmail(props.emailTo, props.emailMessage, props.handleShareClose)} endIcon={<SendIcon />} >
              Share
            </Button>
          </Box>
        </Box>
        <Divider/>
        <Box sx={{ m: 2 }}>
          <Typography variant='h6' textAlign="center">
            Share Link: 
          </Typography>
          <Box textAlign="center" justifyContent="center" alignContent="middle" display="flex">
            <Typography variant="caption" sx={{ "&:hover": {color: "green"}}}>
              {`${window.location.toString()}ref/:${props.id}`} &nbsp;
              <CopyToClipboardButton id={props.id} style={{verticalAlign:"middle"}}/>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
