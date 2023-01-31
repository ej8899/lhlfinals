import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import YouTube from 'react-youtube'; // npx install react-youtube
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from "react-router-dom";
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";


//-------------------------------------------------------------------
import MultilineTextFields from '../ItemDetail/commentbox';
import ComboBox from '../ItemDetail/buttonlist';
//-------------------------------------------------------------------

//-------------------------------------------------------------------
// Import Icons Functions
import { FavouriteStaleStats} from '../Icons/favourite.jsx'
import { LessonStaleStats} from '../Icons/lesson.jsx'
import { RateStaleStats } from '../Icons/review';
import { BookmarkStaleStats } from '../Icons/bookmark';
import { PlaylistStaleStats } from '../Icons/playlist';
import { ShareStaleStats } from '../Icons/share';
import { ReportStaleStats } from '../Icons/report';
import { LikeStaleStats } from '../Icons/like';
import { CloseModal } from '../Icons/close';
import { StarStaleRating } from '../Icons/stars';
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
export const ShareModal= (props) => {

    // reference: https://www.npmjs.com/package/react-youtube
    const videoPlayerOpts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      border: '2px solid #000'
      },
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
    >
      <Fade in={props.open}>
        <Box sx={style}>
          <Box display="flex" width="100%" justifyContent="space-between" gap="2rem">
            <Typography variant='h6' textAlign="center">
              {props.title}
            </Typography>
            <CloseModal handleClose={props.handleShareClose}/>
          </Box>

          <Box display="flex" width="100%" justifyContent="space-around" flexDirection="column">
            <Box display="flex" width="100%" justifyContent="center">
            <Box display="flex" width="35%" justifyContent="center">
              <CardMedia
                component="img"
                height="140"
                image={props.thumbnail}
                alt={props.title}
                width="35%"
              />
              </Box>
              </Box>
            <Box display="flex" justifyContent="center">
              <Typography>
                Share this link: &nbsp;  
                <a href={"//localhost:3000/ref/:${props.videoId"}>localhost:3000/ref/:${props.videoId}</a>
              </Typography>
            </Box>
            </Box>

          </Box>
      </Fade>
    </Modal>
  );
}
