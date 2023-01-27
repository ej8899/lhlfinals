import React, { useEffect, useRef, useState, useContext } from "react";
import YouTube from 'react-youtube'; // npx install react-youtube
import axios from "axios"; // npx install axios

import './Previews.css';
import zlog from "../../helpers/zlog";

// materialUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CardHeader } from '@mui/material';

// detailpage modal
import DetailModal from "../ItemDetail/index.jsx";

// helpers
import { truncateText } from '../../helpers/helpers';

// --------------------------------------------------------
// Complex Interaction Card - Expand More Prop
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Collapse from '@mui/material/Collapse';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
// --------------------------------------------------------


// TODO - any benefit to removing react-youtube and rolling our own variant?

function PreviewItem(props) {
  console.log("preview item props:",props)
  const API_KEY = global.config.youtubekey;
  const testVideoID = "hY7m5jjJ9mM";
 
  const videoId = testVideoID;
 
  // reference: https://www.npmjs.com/package/react-youtube
  const videoPlayerOpts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };



  // TODO - implement materialui skeleton

  // state for video data
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [description, setDesc] = useState('');
// -------------------------------------------------------------
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [descriptionExpanded, setDescriptionExpanded] = useState('');
// -------------------------------------------------------------


  useEffect(() => {
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${props.videoId.item}&key=${API_KEY}`)
      .then(response => {
        let title = response.data.items[0].snippet.title;
        if (title) setTitle(truncateText(title,30));

        // TODO - truncate description
        let description = response.data.items[0].snippet.description;
        if (description) setDesc(truncateText(description,100));

        setDescriptionExpanded(response.data.items[0].snippet.description)
       
        setThumbnail(response.data.items[0].snippet.thumbnails.standard.url);
        if(global.config.debug === true) {
          //zlog('info',"data snippet follows:");
          //console.log(response.data.items[0].snippet);
        }
        /*
        REFERENCE:
        useful items in response data:
        .snippet.
          categoryId
          channelId,
          channelTitle,
          description,
          title,
          thumbnails.default.url, 120x90
          thumbnails.high.url, 480x360
          thumbnails.medium.url, 320x180
          thumbnails.standard.url, 640x480
        */
      })
      .catch(error => {
        console.error(error);
      });
  }, [videoId]);


  // TODO  just display thumbnail here, a click should open to a modal w the youtube player embed
  // TODO - truncate descriptoin to 'x' chars
/*
    <div className="previewItemWrapper">
    <h3>{title}</h3>
    <img src={thumbnail} alt=""></img>
    <YouTube videoId={testVideoID} opts={videoPlayerOpts} />
    </div>
*/


//
// handle open and close of item detail modal
//
const [open, setOpen] = useState(false);
const [selectedResource, setSelectedResource] = useState();
const handleOpen = (resourceId) => {
  setSelectedResource(resourceId);
  console.log("open modal for card DETAIL:",resourceId)
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
 
// TODO - next step here is assign a MODAL window and pass it to open with this resoruce ID


// --------------------------------------------------------
  return (

    <Card sx={{ maxWidth: 345 }}>
  <CardActionArea onClick={() => handleOpen(props.videoId.item)}>
      <CardMedia
        component="img"
        height="140"
        image={thumbnail}
        alt={title}
      />
<DetailModal status={open}></DetailModal>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[700] }} aria-label="recipe">
            <YouTubeIcon />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Category: React"
        subheader="Learning Stage: Beginner"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>

      <Divider>
        <Chip color="warning" label="More Actions" />
      </Divider>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to lesson plan">
          <NoteAddIcon/>
        </IconButton>
        <IconButton aria-label="save for later">
          <BookmarkAddIcon />
        </IconButton>
        <IconButton aria-label="add to playlist">
          <PlaylistAddIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="rate & add review">
          <RateReviewIcon />
        </IconButton>
        <IconButton aria-label="report video">
          <ReportGmailerrorredIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
   

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Read Full Video Description:</Typography>
          <Typography paragraph variant="body2" color="text.secondary" sx={{ wordBreak: "break-word" }}>
          {descriptionExpanded}
          </Typography>
        </CardContent>
      </Collapse>
     
    </Card>
   
  );
};
// --------------------------------------------------------

export default PreviewItem;