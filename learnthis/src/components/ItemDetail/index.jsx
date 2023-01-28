import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import YouTube from 'react-youtube'; // npx install react-youtube
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
//-------------------------------------------------------------------
import MultilineTextFields from './commentbox';
import ComboBox from './buttonlist';
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
export default function DetailModal(props) {

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

  // TODO pass the notes, category and level to database
  const [show, setShow] = useState('none');
  const rateReview = () => {
    if(show === "none") {
    setShow('flex')
    } else {
      setShow('none')
    }
    return    
  }


 

 
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
            <Tooltip title="Close">
              <IconButton aria-label="close" sx={{bgcolor: "lightgrey", "&:hover": {color: 'red'} }} onClick={props.handleClose}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
            </Box>
          <Box display="flex" width="100%" justifyContent="space-around">
              <YouTube videoId={props.videoId} opts={videoPlayerOpts} />
              <MultilineTextFields display={show}/>
            <Typography id="detail-modal-description" display="flex" flexDirection="column" justifyContent="space-around">
              <Tooltip title="Rate & Review Lesson">
                <IconButton aria-label="rate & add review" sx={{ "&:hover": {color: 'teal'} }} onClick={rateReview}>
                  <RateReviewIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Add to Favourites">
                <IconButton aria-label="add to favourites" sx={{ color: `${props.favourite}`, "&:hover": {color: "pink"} }}  onClick={props.addFavourites}>
                  <FavoriteIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Add to Lesson Plan">
                <IconButton aria-label="add to lesson plan" sx={{ color:`${props.lesson}`, "&:hover": {color: 'blue'} }} onClick={props.addLesson}>
                  <NoteAddIcon/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Save for Later">
                <IconButton aria-label="save for later" sx={{ "&:hover": {color: 'green'} }}>
                  <BookmarkAddIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Add to Playlist">
                <IconButton aria-label="add to playlist" sx={{ "&:hover": {color: 'brown'} }}>
                  <PlaylistAddIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Share">
                <IconButton aria-label="share" sx={{ "&:hover": {color: 'purple'} }}>
                  <ShareIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Report Video">
                <IconButton aria-label="report video" sx={{ "&:hover": {color: 'red'} }}>
                  <ReportGmailerrorredIcon />
                </IconButton>
              </Tooltip>
            </Typography>
            </Box>
            <Box display={show}>
            <Box style={{paddingTop:20, paddingLeft:15}}>
              <ComboBox listData={props.complexity} message={'Select the lesson complexity...'}/>
              </Box>
            <Box style={{paddingTop:20, paddingLeft: 20}} >
              <ComboBox listData={props.typeCategory} message={'Select the lesson category...'}/>
              </Box>
              </Box>
          </Box>

        </Fade>
      </Modal>
  );
}