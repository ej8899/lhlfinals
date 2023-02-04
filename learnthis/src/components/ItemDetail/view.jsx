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
import Tags from './multichoice';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import RateReviewIcon from '@mui/icons-material/RateReview';

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
import DiscreteSliderMarks from './slider';
import { isYoutubeUrl, getYoutubeVideoId, extractDomain } from '../../helpers/helpers';
import CardMedia from '@mui/material/CardMedia';

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
// TODO - disable buttons once backend up and running

export const ViewDetailModal = (props) => {

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
              <DiscreteSliderMarks label={"Rate & Review to Set Resource Complexity"} myStage={props.myStage} addMyStage={props.addMyStage}         sliderActive={props.sliderActive} setSliderActive={props.setSliderActive} disabled={true} />

                  <Tags listData={props.typeCategory} message={'Rate & Review to Select Category...'} mySelection={props.myCategory} addMySelection={props.addMyCategory} readOnly={true}/>
              </Box>
              <Box display={props.show}>
              <Box flexDirection="row"  sx={{mt : 1.5}}>
                Rate This Resource: <StarStaleRating star={props.star} addStar={props.addStar} disabled={true} />
              </Box>
              </Box>
            </Box>

            <Box display={props.show} flexDirection="column">

              <MultilineTextFields display={props.show} myComments={props.myComments} addMyComments={props.addMyComments} rows={19} width={"40ch"} label={'Rate & Review to Add Comments'} placeholder={"Make your notes here."} marginLeft={1} disabled={true}/>
              <Box display="flex" justifyContent="space-between" sx={{m:1, gap: 1}}>

                <Tooltip title="Rate & Review Lesson">
                  <Button variant="contained" onClick={() => props.handleClose(props.handleReviewOpen())} startIcon={<RateReviewIcon />}>
                      Rate & Review
                  </Button>
                </Tooltip>
                
                <Tooltip title="Edit My Resource">
                  <Button variant="outlined" onClick={() => props.handleClose(props.handleOpenEdit())} startIcon={<NoteAltIcon/>} sx={{"&:hover" : {color : "warning"}}} >
                    Edit
                  </Button>
                </Tooltip>

                <Tooltip title="Delete My Resource">
                  <Button variant="outlined" sx={{color: "red", borderColor : "red", "&:hover" : {backgroundColor : "lightpink", borderColor : "red"}}} onClick={() => props.handleOpenDelete()} startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                </Tooltip>

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
