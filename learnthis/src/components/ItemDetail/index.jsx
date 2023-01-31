import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import YouTube from 'react-youtube'; // npx install react-youtube
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { Route, Routes, useLocation, Outlet, Link } from "react-router-dom";
//-------------------------------------------------------------------
import MultilineTextFields from './commentbox';
import ComboBox from './buttonlist';
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
export const DetailModal = (props) => {

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
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <Box sx={style}>
          <Box display="flex" width="100%" justifyContent="space-between">
            <Typography id="detail-modal-title" variant="h5" component="h2">
              {props.title}
            </Typography>
            <CloseModal handleClose={props.handleClose}/>
          </Box>
     
          <Box display="flex" width="100%" justifyContent="space-around">
            <Box>
              {/* <YouTube videoId={props.videoId} opts={videoPlayerOpts} /> */}
              <Box display={props.show}>
                <Box style={{paddingTop:20, paddingLeft:15}}>
                  <ComboBox listData={props.complexity} message={'Select the lesson complexity...'} mySelection={props.myComplexity} addMySelection={props.addMyComplexity}/>
                </Box>
                <Box style={{paddingTop:20, paddingLeft: 20}} >
                  <ComboBox listData={props.typeCategory} message={'Select the lesson category...'} mySelection={props.myCategory} addMySelection={props.addMyCategory}/>
                </Box>
              </Box>
            </Box>
     
            <Box display={props.show} flexDirection="column">
              <Box flexDirection="row" textAlign="center">
                Rate This Video: <StarStaleRating star={props.star} addStar={props.addStar}/>
              </Box>
              <MultilineTextFields display={props.show} myComments={props.myComments} addMyComments={props.addMyComments}/>
            </Box>

            <Typography id="detail-modal-description" display="flex" flexDirection="column" justifyContent="space-around">
              <RateStaleStats rateReview={props.rateReview} rate={props.rate} addRate={props.addRate}/>
              <FavouriteStaleStats favourite={props.favourite} addFavourites={props.addFavourites}/>
              <LikeStaleStats like={props.like} addLike={props.addLike} />
              <LessonStaleStats lesson={props.lesson} addLesson={props.addLesson}/>
              <BookmarkStaleStats bookmark={props.bookmark} addBookmark={props.addBookmark} />
              <PlaylistStaleStats playlist={props.playlist} addPlaylist={props.addPlaylist} />
              <ShareStaleStats share={props.share} addShare={props.handleShareOpen}/>
              <ReportStaleStats report={props.report} addReport={() => {props.addReport(props.setOpen(false), props.setExpanded(false))}} />
            </Typography>
       
          </Box>
       

        </Box>
      </Fade>

    </Modal>

  );
}
