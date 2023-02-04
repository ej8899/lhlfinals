import React, { useEffect, useRef, useState, useContext } from "react";
import axios from "axios"; // npx install axios
import zlog from "../../helpers/zlog";

// --------------------------------------------------------
// Material UI Icons
import YouTubeIcon from '@mui/icons-material/YouTube';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
import { blue } from '@mui/material/colors';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CardHeader, Icon } from '@mui/material';
// --------------------------------------------------------

import { getYoutubeVideoId, isYoutubeUrl } from "../../helpers/helpers";
import { NewResource } from "../Icons/newResource";
import { AddNewResource } from "../NewResource/newResource";
import { EditResourceModal } from "./newResourceModal";

// --------------------------------------------------------
// React Router Imports
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// --------------------------------------------------------

// --------------------------------------------------------
// Import Helper Functions
import { randomNumber, randomColor, truncateText, colorGenerator } from "../../helpers/helpers";
// --------------------------------------------------------

// --------------------------------------------------------
// Import State Hooks
import StateStatus from '../../hooks/state';

// Import Icon Hooks/Status
import IconStatus from '../../hooks/iconStatus'
// --------------------------------------------------------

// --------------------------------------------------------
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
import { StarRating } from "../Icons/stars";
import { ExpandIcon, ExpandMore } from "../Icons/expand";
import { NewBadge } from "../Icons/newbadge";
// --------------------------------------------------------


// --------------------------------------------------------
// Import Modal
import { DetailModal }  from "../ItemDetail/index.jsx";
import { ShareModal } from "../Modal/share";
import { StatusModal } from "../NewResource/status";
import { SharedModal } from "../Modal/shared";
import { ResultModal } from "./result";
// --------------------------------------------------------


export const AddResourceFlow = (props) => {
  const API_KEY = global.config.youtubekey;

// -------------------------------------------------------------
  // Import Hooks
  const {

    savingNewResource, 
    setSavingNewResource,
    savedNewResource, 
    setSavedNewResource,
    errorSavingNewResource, 
    setSavingErrorNewResource,
    handleSavedClose,
    
    videoURL,
    setVideoURL,
    videoId,
    setVideoId,

    newResource,
    setNewResource,
    handleNewResourceClose,
    handleNewResourceOpen,
    newURL,
    setNewURL,
    addNewResource,
    setAddNewResource,
    fetchingNewResource,
    setFetchingNewResource,
    handleAddNewResourceClose,

    title,
    setTitle,
    thumbnail,
    setThumbnail,
    description,
    setDesc,
    descriptionExpanded,
    setDescriptionExpanded,

    expanded,
    setExpanded,
    handleExpandClick,

    stage,
    setStage,
    addSetStage,

    category,
    setCategory,

    open,
    setOpen,
    handleClose,
    handleOpen,

    selectedResource,
    setSelectedResource,

    myComments,
    setMyComments,
    addMyComments,

    myComplexity,
    addMyComplexity,
    setMyComplexity,

    myCategory,
    setMyCategory,
    addMyCategory,

    sliderActive,
    setSliderActive,

    myStage,
    setMyStage,
    addMyStage,

    newIcon,
    setNewIcon,
    addNewIcon,

    sendingEmail,
    setSendingEmail,
    sendEmail,
    emailMessage,
    emailMyMessage,
    emailTo,
    emailMyTo,
    emailSent,
    setEmailSent,
    handleSharedClose
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
    shareOpen,
    setShareOpen,
    handleShareClose,
    handleShareOpen,
    report,
    setReport,
    addReport,
    like,
    setLike,
    addLike,
    more,
    setMore,
    addMore,
    star,
    setStar,
    addStar,
    anchorEl,
    setAnchorEl,
    handleClick,
    handleCloseOut,
    filter,
    setFilter
  } = IconStatus();

// -------------------------------------------------------------

  const fetchNewResource = (URL, isYoutubeUrl, getYoutubeVideoId) => {

    setFetchingNewResource(true)
  
    if (isYoutubeUrl(URL)) {
      const videoId =  getYoutubeVideoId(URL)
      setVideoId(videoId)
      setVideoURL(URL)

      axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`)
    // axios.get(`https://www.googleapis.com/`)
      .then(response => { 
        setTimeout(() => {
          setAddNewResource(true)
          setFetchingNewResource(false)
        }, 1200)
        zlog('API',"YouTube API Called:", videoId)
        setTitle(response.data.items[0].snippet.title)
        setDescriptionExpanded(response.data.items[0].snippet.description)
        setThumbnail(response.data.items[0].snippet.thumbnails.standard.url);

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
    } else {
      setTimeout(() => {
        setAddNewResource(true)
        setFetchingNewResource(false)
        isYoutubeUrl(URL) ? console.log(getYoutubeVideoId(URL)) :
        console.log(`ERROR: ${URL}`)
      }, 2000)
    }
  }

    // TODO - sample data - need to tie difference between user and overall && need axios put
    const addingNewResourceSQL = () => {
      setSavingNewResource(true)

      const newURLResource = {
        "id" : props.sampledata.length + 1,
        "videoURL" : newURL,
        "created_at" : new Date().toISOString(),
        "title" : title,
        "thumbnail" : thumbnail,
        "description" : descriptionExpanded,
        "category" : myCategory,
        "stage" : myStage,
        "rating" : star,
        "likes" : like === "default" ? 0 : 1
      }

      props.setsampledata([...props.sampledata, newURLResource]);
      // window.location.reload(true);

      setTimeout(() => {
        setSavingNewResource(false)
        setSavedNewResource(true)
        setNewURL('')
      }, 2000)
    }


// --------------------------------------------------------
  return (
    <div>
    <NewResource handleNewResourceOpen={() => handleNewResourceOpen()}/>
    <AddNewResource 
      open={newResource} handleNewResourceClose={handleNewResourceClose}
      newURL={newURL} setNewURL={setNewURL} 
      fetchNewResource={fetchNewResource} 
      isYoutubeUrl={isYoutubeUrl} getYoutubeVideoId={getYoutubeVideoId}
    />
    <StatusModal 
      open={fetchingNewResource} setStatusOpen={setFetchingNewResource} message={"Fetching New Resource"}
    />
    <StatusModal 
      open={savingNewResource} setStatusOpen={setSavingNewResource} message={"Saving New Resource"}
    />
    <ResultModal 
      open={savedNewResource} setStatusOpen={setSavedNewResource} 
      handleClose={() => handleSavedClose()} 
      message={"Success! Resource has been added."} submessage={"Checkout 'My Resources' for resources you've added."}
      thumbnail={thumbnail} title={title}
    />
    <EditResourceModal 
        open={addNewResource} setOpen={setAddNewResource} 
        handleClose={() => handleAddNewResourceClose()} 
        addingNewResourceSQL={addingNewResourceSQL}
        videoURL={videoURL} thumbnail={thumbnail}
        title={title} setTitle={setTitle} 
        descriptionExpanded={descriptionExpanded} setDescriptionExpanded={setDescriptionExpanded}
        complexity={props.sampleComplexity} 
        typeCategory={props.typeCategory} 
        favourite={favourite} addFavourites={() => addFavourites(filter)}
        lesson={lesson} addLesson={addLesson}
        show={"flex"}
        bookmark={bookmark} addBookmark={addBookmark}
        playlist={playlist} addPlaylist={addPlaylist}
        like={like} addLike={() => addLike(filter)} setLike={setLike}
        star={star} addStar={addStar}
        myComments={myComments} addMyComments={addMyComments}
        myComplexity={myComplexity} addMyComplexity={addMyComplexity}
        myCategory={myCategory} addMyCategory={addMyCategory}
        myStage={myStage} addMyStage={addMyStage}
        sliderActive={sliderActive} setSliderActive={setSliderActive}
      />
    </div>
  );
};
// --------------------------------------------------------

export default AddResourceFlow