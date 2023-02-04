// --------------------------------------------------------
// React Imports
import React, { useEffect, useRef, useState, useContext } from "react";
import axios from "axios"; // npx install axios
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports
// --------------------------------------------------------

// --------------------------------------------------------
// Import Manual Field Functions
import { NewResource } from "../Icons/newResource";
import { AddNewResource } from "../NewResource/newResource";
// --------------------------------------------------------

// --------------------------------------------------------
// Import Helper Functions
import zlog from "../../helpers/zlog";
import { getYoutubeVideoId, isYoutubeUrl, extractDomain } from "../../helpers/helpers";
// --------------------------------------------------------

// --------------------------------------------------------
// Import State Hooks
import StateStatus from '../../hooks/state';

// Import Icon Hooks/Status
import IconStatus from '../../hooks/iconStatus'
// --------------------------------------------------------

// --------------------------------------------------------
// Import Icons Functions
// --------------------------------------------------------

// --------------------------------------------------------
// Import Modal
import { StatusModal } from "../NewResource/status";
import { ResultModal } from "./result";
import { EditResourceModal } from "./newResourceModal";
// --------------------------------------------------------


export const AddResourceFlow = (props) => {
  const API_KEY = global.config.youtubekey;

// --------------------------------------------------------
  // Import Hooks
  const {
    title,
    setTitle,
    thumbnail,
    setThumbnail,

    description,
    setDesc,
    descriptionExpanded,
    setDescriptionExpanded,

    category,
    setCategory,
    categoryExpanded,
    setCategoryExpanded,

    videoURL,
    setVideoURL,
    videoId,
    setVideoId,

    domain, 
    setDomain,
    
    stage,
    setStage,
    addSetStage,

    expanded,
    setExpanded,
    handleExpandClick,

    open,
    setOpen,
    handleClose,
    handleOpen,

    selectedResource,
    setSelectedResource,

    openReview, 
    setOpenReview,
    handleReviewOpen,
    handleReviewClose,

    handleEditedClose,
    openEdited,
    setOpenEdited,
    openEditing, 
    setOpenEditing,
    openEdit,
    setOpenEdit,
    handleOpenEdit,
    handleEditClose,

    openDelete,
    setOpenDelete,
    handleDeleteClose,
    handleOpenDelete,
    openDeleted, 
    setOpenDeleted,
    openDeleting,
    setOpenDeleting,
    handleDeletingClose,
    handleOpenDeleting,

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
    handleSharedClose,

    savingNewResource, 
    setSavingNewResource,
    savedNewResource, 
    setSavedNewResource,
    errorSavingNewResource, 
    setSavingErrorNewResource,
    handleSavedClose,

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
    handleAddNewResourceAbort
  } = StateStatus();
// --------------------------------------------------------

// --------------------------------------------------------
// Import Icon Status
  const {
    handleIconReset,

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
    filter,
    setFilter,

    like,
    setLike,
    addLike,
    likes,
    setLikes,

    more,
    setMore,
    addMore,

    star,
    setStar,
    addStar,

    anchorEl,
    setAnchorEl,
    handleClick,
    handleCloseOut
  } = IconStatus();
// --------------------------------------------------------


// --------------------------------------------------------
// TODO -- Need to add when not a youtube resource
// Fetch from API new resource
  const fetchNewResource = (URL, isYoutubeUrl, getYoutubeVideoId) => {
    setFetchingNewResource(true)
    if (isYoutubeUrl(URL)) {
      const videoId =  getYoutubeVideoId(URL)
      setVideoId(videoId)
      setVideoURL(URL)
      setDomain(extractDomain(URL))
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
// --------------------------------------------------------

// --------------------------------------------------------
// Adding new resource to SQL database
  // TODO - sample data - need to tie difference between user and overall && need axios put
  const addingNewResourceSQL = () => {
    setSavingNewResource(true)

    const newURLResource = {
      "id" : props.sampledata.length + 1,
      "videoURL" : videoURL,
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
      setStar(null)
      setLike('default')
      handleIconReset()
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
        handleClose={() => handleAddNewResourceClose(handleIconReset())} 
        handleAbort={() => handleAddNewResourceAbort(handleIconReset())}
        addingNewResourceSQL={addingNewResourceSQL}
        setNewURL={setNewURL} domain={domain}
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

export default AddResourceFlow