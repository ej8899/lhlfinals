import React, { useEffect, useRef, useState, useContext } from "react";
import axios from "axios"; // npx install axios
import './Previews.css';
import zlog from "../../helpers/zlog";

// --------------------------------------------------------
// Material UI Icons
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import YouTubeIcon from '@mui/icons-material/YouTube';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
import { blue } from '@mui/material/colors';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import Skeleton from '@mui/material/Skeleton';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CardHeader, Icon } from '@mui/material';
// --------------------------------------------------------

// --------------------------------------------------------
// Import Helper Functions
import { randomNumber, randomColor, ExpandMore, truncateText, Stars } from "../../helpers/helpers";

// Import State Hooks
import StateStatus from '../../hooks/state';

// Import Icon Hooks/Status
import IconStatus from '../../hooks/iconStatus'

// Import Icons
import { FavouriteStats } from '../Icons/favourite.jsx'
import { LessonStats } from '../Icons/lesson.jsx'
import { RateStats } from '../Icons/review.jsx'
import { BookmarkStats } from "../Icons/bookmark";
import { PlaylistStats } from "../Icons/playlist";
import { ShareStats } from "../Icons/share";
import { ReportStats } from "../Icons/report";
import { LikeStats } from "../Icons/like";
import { MoreStats } from "../Icons/hamburger";

// Import Detail Modal
import DetailModal from "../ItemDetail/index.jsx";
// --------------------------------------------------------


// TODO - any benefit to removing react-youtube and rolling our own variant?

function PreviewItem(props) {
  // console.log("preview item props:",props)
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

// -------------------------------------------------------------
  // Import Hooks
  const {
    title,
    setTitle,
    thumbnail,
    setThumbnail,
    description,
    setDesc,
    expanded,
    setExpanded,
    handleExpandClick,
    descriptionExpanded,
    setDescriptionExpanded,
    stage,
    setStage,
    category,
    setCategory,
    video,
    setVideo,
    open,
    setOpen,
    selectedResource,
    setSelectedResource,
    handleClose,
    handleOpen
  } = StateStatus();
// -------------------------------------------------------------

// -------------------------------------------------------------
// Import Icon Status
  const {
    favourite,
    setFavourite,
    addFavourites,
    lesson,
    setLesson,
    addLesson,
    rate,
    setRate,
    addRate,
    rateReview,
    show,
    setShow,
    bookmark,
    setBookmark,
    addBookmark,
    playlist,
    setPlaylist,
    addPlaylist,
    share,
    setShare,
    addShare,
    report,
    setReport,
    addReport,
    like,
    setLike,
    addLike,
    more,
    setMore,
    addMore
  } = IconStatus();

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
        setStage(`Complexity: ${props.stage}`)
        setCategory(`Category: ${props.category}`)
        setVideo(response.data.items[0].snippet.video)
        setOpen(false)
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


/*
    <div className="previewItemWrapper">
    <h3>{title}</h3>
    <img src={thumbnail} alt=""></img>
    <YouTube videoId={testVideoID} opts={videoPlayerOpts} />
    </div>
*/

const ratingScore = `Rating: ${props.rating}`
const skeletonTimer = randomNumber(100,3000);

// --------------------------------------------------------
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleOpen}>
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

        <CardHeader
          avatar={
            props.nowloading ? (
              <Skeleton animation="wave" variant="circular" width={40} height={40} />
            ) : (
              <Fade in={!props.nowloading} timeout={{ enter: skeletonTimer }}>
                <Avatar style={{
                  backgroundColor: randomColor()}} aria-label="recipe">
                  <YouTubeIcon />
                </Avatar>
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
              <Fade in={!props.nowloading} timeout={{ enter: skeletonTimer }}>
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
              <Fade in={!props.nowloading} timeout={{ enter: skeletonTimer }}>
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
          <Fade in={!props.nowloading} timeout={{ enter: skeletonTimer }}>
            <CardContent>
            <Box 
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center" 
              >
              <Typography gutterBottom variant='h6' textAlign="center" marginBottom={'0px'} lineHeight="105%" marginTop={"-15px"}>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" marginBottom={'-12px'}>
                <Tooltip title={ratingScore} >
                  <IconButton sx={{ "&:hover": {color: 'orange'} }}>
                    <Stars rating={props.rating} />
                  </IconButton>
                </Tooltip>
                <LikeStats likes={props.likes}/>
              </Typography>
              </Box>
            </CardContent>
          </Fade>
        )}
      </CardActionArea>
          <div>
      <DetailModal 
        open={open} 
        handleClose={handleClose} 
        videoId={props.videoId} 
        title={title} 
        complexity={props.complexity} 
        typeCategory={props.typeCategory} 
        favourite={favourite} 
        addFavourites={addFavourites}
        lesson={lesson}
        addLesson={addLesson}
        rate={rate}
        show={show}
        rateReview={rateReview}
        bookmark={bookmark}
        addBookmark={addBookmark}
        playlist={playlist}
        addPlaylist={addPlaylist}
        share={share}
        addShare={addShare}
        report={report}
        addReport={addReport}
        like={like}
        addLike={addLike}
        setLike={setLike}
        more={more}
        addMore={addMore}
        setMore={setMore}
        />
          </div>
      <Divider>
        {props.nowloading ? (
          <Skeleton animation="wave" variant="rounded" width={100} height={30} />
        ) : (
          <Fade in={!props.nowloading} timeout={{ enter: skeletonTimer }}>
            <Chip color="warning" label="More Actions" />
          </Fade>
        )}
      </Divider>


      <CardActions disableSpacing>
      {props.nowloading ? (
          <Skeleton animation="wave" variant="circular" width={30} height={30} />
        ) : (
          <MoreStats nowLoading={props.nowLoading} skeletonTimer={skeletonTimer} more={more} addMore={addMore} />
        )}

        {props.nowloading ? (
          <Skeleton animation="wave" variant="circular" width={30} height={30} />
        ) : (
          <FavouriteStats nowloading={props.nowLoading} skeletonTimer={skeletonTimer} favourite={favourite} addFavourites={addFavourites}/>
        )}

        {props.nowloading ? (
          <Skeleton animation="wave" variant="circular" width={30} height={30} />
        ) : (
          <LessonStats nowloading={props.nowLoading} skeletonTimer={skeletonTimer} lesson={lesson} addLesson={addLesson}/>
        )}

        {props.nowloading ? (
          <Skeleton animation="wave" variant="circular" width={30} height={30} />
        ) : (
          <BookmarkStats nowloading={props.nowLoading} skeletonTimer={skeletonTimer} bookmark={bookmark} addBookmark={addBookmark}/>
        )}

        {props.nowloading ? (
          <Skeleton animation="wave" variant="circular" width={30} height={30} />
        ) : (
          <PlaylistStats nowloading={props.nowLoading} skeletonTimer={skeletonTimer} playlist={playlist} addPlaylist={addPlaylist}/>
        )}

        {props.nowloading ? (
          <Skeleton animation="wave" variant="circular" width={30} height={30} />
        ) : (
          <ShareStats nowLoading={props.nowLoading} skeletonTimer={skeletonTimer} share={share} addShare={addShare} />
        )}

        {props.nowloading ? (
          <Skeleton animation="wave" variant="circular" width={30} height={30} />
        ) : (
          <RateStats nowloading={props.nowLoading} skeletonTimer={skeletonTimer} rate={rate} rateReview={rateReview}/>
        )}

        {props.nowloading ? (
          <Skeleton animation="wave" variant="circular" width={30} height={30} />
        ) : (
          <ReportStats nowloading={props.nowLoading} skeletonTimer={skeletonTimer} report={report} addReport={addReport} />
        )}
      </CardActions>
      <Divider/>
        <CardContent style={{paddingBottom:"0", paddingTop:"0"}}>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" textAlign="center">

          {props.nowloading ? (
            <Skeleton animation="wave" height={40} style={{ marginBottom: 6, marginLeft: 6}} width="65%" />
          ):(
            <Fade in={!props.nowloading} timeout={{ enter: skeletonTimer }}>
              <Typography variant="body2" >Read Video Description: </Typography>
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
            <Fade in={!props.nowloading} timeout={{ enter: skeletonTimer }}>
              <ExpandMoreIcon fontSize="small"/>
            </Fade>
          )}
          </ExpandMore>
          </Box>
        </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
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