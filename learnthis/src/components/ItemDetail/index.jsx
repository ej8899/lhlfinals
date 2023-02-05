// --------------------------------------------------------
// React Imports
import React, {useState} from 'react';
import { Route, Routes, useLocation, Outlet, Link } from "react-router-dom";
import YouTube from 'react-youtube'; // npx install react-youtube
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports
import IconButton from '@mui/material/IconButton';
// --------------------------------------------------------

// --------------------------------------------------------
// Import manual function fields
import MultilineTextFields from './commentbox';
import ComboBox from './buttonlist';
import Tags from './multichoice';
import DiscreteSliderMarks from './slider';
// --------------------------------------------------------

// --------------------------------------------------------
// Import Icon functions
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
// --------------------------------------------------------

//-------------------------------------------------------------------
// Import Helper Functions
import { isYoutubeUrl, getYoutubeVideoId, extractDomain } from '../../helpers/helpers';
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
      disableScrollLock={true}
    >
      <Fade in={props.open}>
        <Box sx={style}>
          <Box display="flex" width="100%" justifyContent="space-between" alignItems="center">
            <Typography id="detail-modal-title" variant="h5" component="h2">
              {props.title}
            </Typography>
            <Box>
              <CloseModal handleClose={props.handleClose}/>
            </Box>
          </Box>
          <Box display="flex" width="100%" justifyContent="space-around">
            <Box>
              {isYoutubeUrl(props.videoURL) && <YouTube videoId={getYoutubeVideoId(props.videoURL)} opts={videoPlayerOpts} />}
              {!isYoutubeUrl(props.videoURL) && 
                <Box display="flex" alignItems="center" flexDirection="column">
                  <CardMedia
                    component="img"
                    height="360"
                    width="640"
                    image={props.thumbnail}
                    alt={props.title}
                    sx={{marginBottom : 2}}
                  />
                  <Typography variant='body2' sx={{marginBottom : "2"}}> 
                    View Source Resource Here:  &nbsp;
                    <a href={props.videoURL} target="_blank">
                      {props.domain}                      
                    </a>
                  </Typography>
                </Box>
              }
              <Box display={props.show} alignItems="center" marginTop="1rem">
                <DiscreteSliderMarks label={"Rate Resource Complexity"} myStage={props.myStage} addMyStage={props.addMyStage}         sliderActive={props.sliderActive} setSliderActive={props.setSliderActive} />
                {/* <Box style={{paddingTop:20, paddingLeft:15}}>
                  <ComboBox listData={props.complexity} message={'Select the lesson complexity...'} mySelection={props.myComplexity} addMySelection={props.addMyComplexity}/>
                </Box> */}
                {/* <Box style={{paddingTop:20, paddingLeft: 20}} > */}
                  {/* <ComboBox listData={props.typeCategory} message={'Select the lesson category...'} mySelection={props.myCategory} addMySelection={props.addMyCategory}/> */}
                <Tags listData={props.typeCategory} message={'Select the lesson category...'} mySelection={props.myCategory} addMySelection={props.addMyCategory}/>
                {/* </Box> */}
              </Box>
              <Box display={props.show}>
                <Box  flexDirection="row" sx={{mt : 1.5}}>
                  Rate This Resource: <StarStaleRating star={props.star} addStar={props.addStar}/>
                </Box>
              </Box>
            </Box>
            <Box display={props.show} flexDirection="column">
              <MultilineTextFields display={props.show} myComments={props.myComments} addMyComments={props.addMyComments} rows={19} width={"40ch"} label={'My Comments'} placeholder={"Make your notes here."} marginLeft={1}/>
              <Box display="flex" justifyContent="flex-end" sx={{mt:1, mb: 1, gap: 5}}>
                <Button variant="outlined" sx={{color: "red", borderColor : "red", "&:hover" : {backgroundColor : "lightpink", borderColor : "red"}}} onClick={() => props.handleCancel()}>
                  Cancel
                </Button>
                <Button variant="contained" sx={{width: "5em"}} href="" onClick={() => props.handleClose(props.addingNewResourceSQL())} >
                  Save
                </Button>
              </Box>
            </Box>
            <Typography id="detail-modal-description" display="flex" flexDirection="column" justifyContent="space-around" paddingBottom="3rem">
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
