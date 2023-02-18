// --------------------------------------------------------
// React Imports
import React, {useState} from 'react';
import YouTube from 'react-youtube'; // npx install react-youtube
import { Route, Routes, useLocation, Outlet, Link } from "react-router-dom";
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports
// --------------------------------------------------------

// --------------------------------------------------------
// Import Manual Field Functions
import MultilineTextFields from '../ItemDetail/commentbox';
import Tags from '../ItemDetail/multichoice';
import DiscreteSliderMarks from '../ItemDetail/slider';
// --------------------------------------------------------

// --------------------------------------------------------
// Import Helper Functions
import { isYoutubeUrl, getYoutubeVideoId, extractDomain } from '../../helpers/helpers';
// --------------------------------------------------------

//-------------------------------------------------------------------
// Import missing image
import missingimage from "../../missingimage.png"
//-------------------------------------------------------------------

// --------------------------------------------------------
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

export const EditResourceModal = (props) => {

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
      onClose={props.handleAbort}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      disableScrollLock={true}
    >
      <Fade in={props.open}>
        <Box sx={style}>
          <Box display="flex" width="100%" justifyContent="space-between" alignItems="center" sx={{marginBottom : 2}}>
            { !props.errorBlank &&
              <TextField
                required
                id="outlined-required"
                sx={{width:"95%", marginBottom: "1.5em"}}
                label="Choose Title"
                value={props.title}
                onChange={(event) => props.setTitle(event.target.value)}
              />
            }
            { props.errorBlank &&
              <TextField
                error
                required
                id="outlined-required"
                sx={{width:"95%"}}
                label="Choose Title"
                value={props.title}
                onChange={(event) => props.setTitle(event.target.value)}
                helperText="Title cannot be blank."
              />
            }
            <Box>
              <CloseModal handleClose={props.handleAbort}/>
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
                    width="635"
                    image={props.thumbnail}
                    src={'https://via.placeholder.com/345x140.png/F2D2BD?text=Image+Not+Yet+Available'}
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
                <DiscreteSliderMarks label={"Rank Resource Complexity"} myStage={props.myStage} addMyStage={props.addMyStage} sliderActive={props.sliderActive} setSliderActive={props.setSliderActive} />
                <Tags listData={props.typeCategory} message={'Select the lesson category...'} mySelection={props.myCategory} addMySelection={props.addMyCategory}/>
              </Box>
              <Box display={props.show}>
                <Box  flexDirection="row" sx={{mt : 1.5}}>
                Rate This Resource: <StarStaleRating star={props.star} addStar={props.addStar}/>
                </Box>
              </Box>
            </Box>
            <Box display={props.show} flexDirection="column" >
              <MultilineTextFields display={props.show} myComments={props.descriptionExpanded} addMyComments={props.setDescriptionExpanded} rows={19} width={"40ch"} label={'Resource Description'} placeholder={"Add resource description here."} marginLeft={1}/>
              <Box display="flex" justifyContent="flex-end" sx={{mt:1, mb: 1, gap: 5}}>
                <Button variant="outlined" sx={{color: "red", borderColor : "red", "&:hover" : {backgroundColor : "lightpink", borderColor : "red"}}} onClick={() => props.handleCancel(props.setNewURL(""))}>
                  Cancel
                </Button>
                <Button variant="contained" sx={{width: "5em"}} href="" onClick={() => props.addingNewResourceSQL()} >
                  Save
                </Button>
              </Box>
            </Box>
            <Typography id="detail-modal-description" display="flex" flexDirection="column" justifyContent="space-around" paddingBottom="3rem" paddingLeft="0.8em">
              <FavouriteStaleStats favourite={props.favourite} addFavourites={props.addFavourites}/>
              <LikeStaleStats like={props.like} addLike={props.addLike} />
              <LessonStaleStats lesson={props.lesson} addLesson={props.addLesson}/>
              <BookmarkStaleStats bookmark={props.bookmark} addBookmark={props.addBookmark} />
              <PlaylistStaleStats playlist={props.playlist} addPlaylist={props.addPlaylist} />
            </Typography>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
