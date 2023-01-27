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
import {  truncateText,
          randomNumber } from '../../helpers/helpers';

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
import Tooltip from '@mui/material/Tooltip';
import Skeleton from '@mui/material/Skeleton';
import Fade from '@mui/material/Fade';

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
  const [stage, setStage] = useState('');
  const [category, setCategory] = useState('');
// -------------------------------------------------------------


  useEffect(() => {
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${props.videoId}&key=${API_KEY}`)
      .then(response => {
        // let title = response.data.items[0].snippet.title;
        // if (title) setTitle(truncateText(title,30));
        setTitle(response.data.items[0].snippet.title)

        // TODO - truncate description
        let description = response.data.items[0].snippet.description;
        if (description) setDesc(truncateText(description,100));

        setDescriptionExpanded(response.data.items[0].snippet.description)
        setStage(`Learning Stage: ${props.stage}`)
        setCategory(`Category: ${props.category}`)
       
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

// Random Colour for icon thumbnail
function randomColor() {
  let hex = Math.floor(Math.random() * 0xFFFFFF);
  let color = "#" + hex.toString(16);

  return color;
}
// TODO - next step here is assign a MODAL window and pass it to open with this resoruce ID

const skeletonTimer = randomNumber(100,3000);

// --------------------------------------------------------
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => handleOpen(props.videoId)}>
        {props.nowloading ? (
          <Skeleton sx={{ height: 140 }} animation="wave" variant="rectangular" />
        ) : (
          <Fade in={!props.nowloading} timeout={{ enter: skeletonTimer }}>
            <CardMedia
              component="img"
              height="140"
              image={thumbnail}
              alt={title}
            />
          </Fade>
        )}
       
        <DetailModal status={open} handleClose={handleClose}/>
     
        <CardHeader
          avatar={
            props.nowloading ? (
              <Skeleton animation="wave" variant="circular" width={40} height={40} />
            ) : (
              <Fade in={!props.nowloading} timeout={{ enter: 4000 }}>
                <Avatar style={{
                  backgroundColor: randomColor()}} aria-label="recipe">
                  <YouTubeIcon />
                </Avatar>
              </Fade>
            )
          }
          action={
            props.nowloading ? null : (
              <Fade in={!props.nowloading} timeout={{ enter: 4000 }}>
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              </Fade>
            )
          }
          title={
            props.nowloading ? (
              <Skeleton 
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />) : (
              <Fade in={!props.nowloading} timeout={{ enter: 4000 }}>
                <Typography>
                  {category}
                </Typography>
              </Fade>
            )
          }
          subheader={
            props.nowloading ? (
              <Skeleton animation="wave" height={10} width="40%" />
            ) : (
              <Fade in={!props.nowloading} timeout={{ enter: 4000 }}>
                <Typography variant="body2">
                  {stage}
                </Typography>
              </Fade>
            )
          }  
        />

        {props.nowloading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={40} style={{ marginBottom: 6, marginLeft: 20}} width="85%" />
            <Skeleton animation="wave" height={20} style={{marginLeft: 20}} width="85%" />
            <Skeleton animation="wave" height={20} style={{marginLeft: 20}} width="85%" />
            <Skeleton animation="wave" height={20} style={{marginLeft: 20}} width="85%" />
          </React.Fragment>
        ) : (
          <Fade in={!props.nowloading} timeout={{ enter: 4000 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </Fade>
        )}
      </CardActionArea>

      <Divider>
        {props.nowloading ? (
          <Skeleton animation="wave" variant="rounded" width={100} height={30} />
        ) : (
          <Fade in={!props.nowloading} timeout={{ enter: 4000 }}>
            <Chip color="warning" label="More Actions" />
          </Fade>
        )}
      </Divider>

      <CardActions disableSpacing>
        {props.nowloading ? (
          <Skeleton animation="wave" variant="circular" width={30} height={30} />
        ) : (
          <Fade in={!props.nowloading} timeout={{ enter: 4000 }}>
            <Tooltip title="Add to Favourites">
              <IconButton aria-label="add to favourites">
                <FavoriteIcon />
              </IconButton>
            </Tooltip>
          </Fade>
        )}

        {props.nowloading ? (
          <Skeleton animation="wave" variant="circular" width={30} height={30} />
        ) : (
          <Fade in={!props.nowloading} timeout={{ enter: 4000 }}>
            <Tooltip title="Add to Lesson Plan">
              <IconButton aria-label="add to lesson plan">
                <NoteAddIcon/>
              </IconButton>
            </Tooltip>
          </Fade>
        )}

        {props.nowloading ? (
          <Skeleton animation="wave" variant="circular" width={30} height={30} />
        ) : (
          <Fade in={!props.nowloading} timeout={{ enter: 4000 }}>
            <Tooltip title="Save for Later">
              <IconButton aria-label="save for later">
                <BookmarkAddIcon />
              </IconButton>
            </Tooltip>
          </Fade>
        )}
     
        {props.nowloading ? (
          <Skeleton animation="wave" variant="circular" width={30} height={30} />
        ) : (
          <Fade in={!props.nowloading} timeout={{ enter: 4000 }}>
            <Tooltip title="Add to Playlist">
              <IconButton aria-label="add to playlist">
                <PlaylistAddIcon />
              </IconButton>
            </Tooltip>
          </Fade>
        )}

        {props.nowloading ? (
          <Skeleton animation="wave" variant="circular" width={30} height={30} />
        ) : (
          <Fade in={!props.nowloading} timeout={{ enter: 4000 }}>
            <Tooltip title="Share">
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </Tooltip>
          </Fade>
        )}

        {props.nowloading ? (
          <Skeleton animation="wave" variant="circular" width={30} height={30} />
        ) : (
          <Fade in={!props.nowloading} timeout={{ enter: 4000 }}>
            <Tooltip title="Rate & Review Lesson">
              <IconButton aria-label="rate & add review">
                <RateReviewIcon />
              </IconButton>
            </Tooltip>
          </Fade>
        )}
       
        {props.nowloading ? (
          <Skeleton animation="wave" variant="circular" width={30} height={30} />
        ) : (
          <Fade in={!props.nowloading} timeout={{ enter: 4000 }}>
            <Tooltip title="Report Video">
              <IconButton aria-label="report video">
                <ReportGmailerrorredIcon />
              </IconButton>
            </Tooltip>
          </Fade>
        )}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        {props.nowloading ? (
          <Skeleton animation="wave" variant="circular" width={30} height={30} />
        ) : (
          <Fade in={!props.nowloading} timeout={{ enter: 4000 }}>
            <ExpandMoreIcon />
          </Fade>
        )}
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