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
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
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

//-------------------------------------------------------------------
// Import missing image
import missingimage from "../../missingimage.png"
//-------------------------------------------------------------------

import ShareTwitterButton from './ShareTwitterButton';
import { truncateText } from '../../helpers/helpers';

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
  // handle accordion view
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
      <Box sx={style} variant="outlined" severity="info">
        <Box display="flex" width="100%" justifyContent="space-between" gap="2rem">
          <Typography variant='h6' textAlign="center">
            Share Resource
          </Typography>
          <Box>
            <CloseModal handleClose={props.handleShareClose}/>
          </Box>
        </Box>
        <br/>
        <Box display="flex" width="100%" justifyContent="space-around" flexDirection="column" >
        <Paper sx={{ p:1}}>
        <Typography style={{ marginLeft : 8, marginBottom : 10}} textAlign="center">
          {truncateText(props.title,40)}
        </Typography>
        
          <Box display="flex" width="100%" justifyContent="center" >
            <Box display="flex" width="55%" justifyContent="center">
              <CardMedia
                component="img"
                height="140"
                width="345"
                image={props.thumbnail}
                src={'https://via.placeholder.com/345x140.png/F2D2BD?text=Image+Not+Yet+Available'}
                sx={{marginBottom : 2}}
              />
            </Box>
          </Box>
          </Paper><br/>
          <Divider/>

          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          >
          <Typography sx={{ flexShrink: 0 }}>Share by email...</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <InputWithIcon label={"Email Address"} width={"38ch"} margin={0} botMargin={2} emailTo={props.emailTo} emailMyTo={props.emailMyTo} errorBlank={props.errorBlank} errorEmail={props.errorEmail} />
            <MultilineTextFields myComments={props.emailMessage} rows={3} width={"41ch"} label={'Message...'} placeholder={"Type Your Message Here"} margin={0} addMyComments={props.emailMyMessage} botMargin={0}/>
          </Box>
          <Box display="flex" justifyContent="flex-end" sx={{ m: 2 }}>
            <Button variant="contained" href="" onClick={() => props.sendEmail(props.emailTo, props.emailMessage, props.handleShareClose)} endIcon={<SendIcon />} >
              Share
            </Button>
          </Box>
          </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}>Share by posting to twitter...</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box textAlign="center" justifyContent="center" alignContent="middle" display="flex">
        <Typography variant='p' textAlign="center">
        <ShareTwitterButton style={{marginBottom:15}}/>
        (opens a new window)
        </Typography>
        </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}>Share a direct link to resource...</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant='h6' textAlign="center">
          
          <Divider/>
            Share Link: 
          </Typography>
          <Box textAlign="center" justifyContent="center" alignContent="middle" display="flex">
            <Typography variant="caption" sx={{ "&:hover": {color: "green"}}}>
              {`${window.location.toString()}ref/:${props.id}`} &nbsp;
              <CopyToClipboardButton id={props.id} style={{verticalAlign:"middle"}}/>
            </Typography>
          </Box>
          <Divider/>
        </AccordionDetails>
      </Accordion>

      </Box>
        
        <Divider/>
        
        
        <Box sx={{ m: 2 }}>
          
        </Box>
      </Box>
    </Modal>
  );
}
