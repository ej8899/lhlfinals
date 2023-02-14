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
import { getYoutubeVideoId, isYoutubeUrl, extractDomain, getdata } from "../../helpers/helpers";
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
import { NewResourceModal } from "./newResourceModal";
import { ErrorModal } from "./error";
// --------------------------------------------------------

//---------------------------------------------------------
// Import user authentication
import { AuthContext } from '../../hooks/handleUsers.js';
import { FilterContext } from "../../helpers/filter";
//---------------------------------------------------------


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
    handleDeletedClose,

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

    errorBlank, 
    setErrorBlank,
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
    handleAddNewResourceAbort,
    errorFetchingNewResource, 
    setFetchingErrorNewResource,
    handleErrorFetchingNewResourceClose,
    errorFetchingNewResource1, 
    setFetchingErrorNewResource1,
    handleErrorFetchingNewResourceClose1,
    handleErrorSavingNewResourceClose
  } = StateStatus();
// --------------------------------------------------------

// --------------------------------------------------------
// Import Icon Status
  const {
    onLoadReport,

    resourceKey,
    setResourceKey,

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
    if (!URL) {
      setErrorBlank(true);
    } else {
      setErrorBlank(false);
      props.setNewResource(false);
      setFetchingNewResource(true)
      setVideoURL(URL)
      setDomain(extractDomain(URL))

      if (isYoutubeUrl(URL)) {
        const videoId =  getYoutubeVideoId(URL)
        setVideoId(videoId)
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`)
      // axios.get(`https://www.googleapis.com/`)
        .then(response => { 
          if(response.data.items[0] === undefined) {
            console.log(`ERROR: ${URL} Video Not Found`)
            setTimeout(() => {
              setFetchingErrorNewResource(true)
              setFetchingNewResource(false)
            }, 1200)
          } else {
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
          }
        })
        .catch(error => {
          console.error(error);
          setTimeout(() => {
            setFetchingErrorNewResource1(true)
            setFetchingNewResource(false)
          }, 1200)
        });

      } else {
        axios.post('http://localhost:8080/api/extract', {url: URL})
        .then(response => {

          // console.log(response.data)
          zlog('API',"Non-YouTube API Called:", URL)

          setTitle(response.data.title)
          setThumbnail(response.data.thumbnail)
          setDescriptionExpanded(response.data.description)

          setTimeout(() => {
            setAddNewResource(true)
            setFetchingNewResource(false)
          }, 1200)

        })
        .catch(error => {
          console.error(error);
          setTimeout(() => {
            setFetchingErrorNewResource1(true)
            setFetchingNewResource(false)
          }, 1200)
        });
        }
    }
  }
// --------------------------------------------------------

// --------------------------------------------------------
// Adding new resource to SQL database
  // TODO - sample data - need to tie difference between user and overall && need axios put

  const { isAuth, user, userid, logout } = useContext(AuthContext);
  const {filterError, filterData, setFilterError, handlefilterError} = useContext(FilterContext);

  const addingNewResourceSQL = () => {
    if (!title) {
      setErrorBlank(true)
    } else {
      setSavingNewResource(true)
      handleAddNewResourceClose()

      const newURLResource = {
        resource: {
          "profile_id" : userid,
          "url": videoURL,
          "title": title,
          "description": descriptionExpanded,
          "thumbnail": thumbnail,
        },
        user: {
          "profile_id": userid,
          "myComments_public" : undefined,
          "myComments_private" : myComments? myComments : undefined,
          "myRating": star ? Math.ceil(star) : undefined,
          "myRanking": myStage >= 0 && myStage !== null ? myStage : undefined,
          "myCategories": myCategory ? myCategory : [],
          "is_liked" : like === "default" ? false : true,
          "is_favourite" : favourite === "default" ? false : true,
          "is_bookmarked" : bookmark === "default" ? false : true, 
          "is_playlist" : playlist === "default" ? false : true,
          "is_reported" : report === "default" ? false : true,
          "is_recommended" : lesson === "default" ? false : true
        }
      }

      // console.log(newURLResource)

    //   const newURLResource = {
    //     "id" : props.sampledata.length + 1, //delete when tie in backend
    //     "profile_id" : userid,

    //     "resource_id": props.sampledata.length + 1,
    //     "videoURL" : videoURL,
    //     "title" : title,
    //     "thumbnail" : thumbnail,
    //     "description" : descriptionExpanded,
    //     "created_at" : new Date().toISOString(),

    //     "category" : myCategory,
    //     "stage" : myStage,
    //     "rating" : star,
    //     "likes" : like === "default" ? 0 : 1,

    //     "myCategory" : myCategory,
    //     "myStage" : myStage,
    //     "star" : star,
    //     "myComments" : myComments
    //   }

    //   const tmpdata = {

    //     "profile_id" : 1,
    //     "url" : videoURL,
    //     "title" : title,
    //     "thumbnail" : thumbnail,
    //     "description" : descriptionExpanded
    // }

    return axios.post('http://localhost:8080/api/resources/withAddition', newURLResource)
    .then(response => {
      // console.log(JSON.parse(JSON.stringify(response.data)))
      // console.log(response.data)
      const data = {
        id: response.data.resource.id,
        profile_id: response.data.resource.profile_id,
        resource_id: response.data.resource.id,
        videoURL : response.data.resource.url,
        title: response.data.resource.title,
        thumbnail : response.data.resource.thumbnail,
        description: response.data.resource.description,
        created_at : response.data.resource.created_at,
        deleted_at : response.data.resource.deleted_at ? response.data.resource.deleted_at : null,

        category : response.data.resource.categories ?  response.data.resource.categories : [],
        stage:  response.data.resource.avg_ranking ? Number(response.data.resource.avg_ranking) : null,
        rating : response.data.resource.avg_rating ? Number(response.data.resource.avg_rating) : null,
        likes : response.data.resource.total_likes ? Number(response.data.resource.total_likes) : 0,

        myCategory : response.data.user.myCategories ? response.data.user.myCategories : [],
        myStage : response.data.user.myRanking ? Number(response.data.user.myRanking) : null,
        star : response.data.user.myRating ? Number(response.data.user.myRating) : null,
        myComments : response.data.user.myComments_public ? response.data.user.myComments_public : "",

        favourite : response.data.user.is_favourite === true ? "pink" : "default",
        bookmark : response.data.user.is_bookmarked === true ? "green" : "default",
        playlist : response.data.user.is_playlist === true  ? "maroon" : "default",
        lesson : response.data.user.is_recommended === true ? "blue" : "default",
        report : response.data.user.is_reported === true ? "red" : "default",
        like : response.data.user.is_liked === true ? "purple" : "default"
      }

      // console.log(data)
      props.setsampledata([...props.sampledata, data]);
      
      // window.location.reload(true);
      setTimeout(() => {
        setSavingNewResource(false)
        setSavedNewResource(true)
        setStar(null)
        setLike('default')
        handleIconReset()
        setErrorBlank(false)
      }, 2000)
    })
    .catch(error => {
      console.error(error);
      setTimeout(() => {
        setSavingNewResource(false)
        setSavingErrorNewResource(true)
      }, 1200)
    });

    }
  }
// --------------------------------------------------------

  return (

    <div>
      {userid &&
        <React.Fragment>
          {/* <NewResource handleNewResourceOpen={() => handleNewResourceOpen(console.log(props.sampledata))}/> */}
          <AddNewResource 
            open={props.newResource} handleNewResourceClose={() => props.handleNewResourceClose(setErrorBlank(false), setNewURL(""))}
            newURL={newURL} setNewURL={setNewURL} errorBlank={errorBlank}
            fetchNewResource={fetchNewResource}  setErrorBlank={setErrorBlank}
            isYoutubeUrl={isYoutubeUrl} getYoutubeVideoId={getYoutubeVideoId}
          />
          <StatusModal 
            open={fetchingNewResource} setStatusOpen={setFetchingNewResource} message={"Fetching New Resource"}
          /> 
          <StatusModal 
            open={savingNewResource} setStatusOpen={setSavingNewResource} message={"Saving New Resource"}
          />
          <ErrorModal 
            open={errorFetchingNewResource} handleErrorFetchingNewResourceClose={handleErrorFetchingNewResourceClose} 
            handleErrorFetchingNewResourceAbort={handleErrorFetchingNewResourceClose} 
            message={"Oops - The Youtube link is incorrect or no longer exists."} submessage={"Would you like to Try Again?"} 
            setNewResource={props.setNewResource} setNewURL={setNewURL}
          />
          <ErrorModal 
            open={errorFetchingNewResource1} handleErrorFetchingNewResourceClose={handleErrorFetchingNewResourceClose1} 
            handleErrorFetchingNewResourceAbort={handleErrorFetchingNewResourceClose1} 
            message={"Oops - There was an error fetching your resource."} submessage={"Would you like to Try Again?"} 
            setNewResource={props.setNewResource} setNewURL={setNewURL}
          />
          <ErrorModal 
            open={errorSavingNewResource} 
            message={"Oops - An error was encountered saving your resource."} submessage={"Would you like to Try Again?"} 
            setNewResource={setAddNewResource} setNewURL={setNewURL}
            handleErrorFetchingNewResourceClose={handleErrorSavingNewResourceClose}
            handleErrorFetchingNewResourceAbort={() => handleAddNewResourceAbort(handleIconReset(), handleErrorSavingNewResourceClose())}
          />
          <ResultModal 
            open={savedNewResource} setStatusOpen={setSavedNewResource} 
            handleClose={() => handleSavedClose(filterData("refresh", true, props.setsampledata, props.sampledata, props.combinedData, true, props.setLoading, false, props.setResourceCount, props.setShowMoreCards))} 
            message={"Success! Resource has been added."} 
            thumbnail={thumbnail} title={title}
            setsampledata={props.setsampledata} sampledata={props.sampledata}
            combinedData={props.combinedData} handleReviewClose={handleReviewClose}
            setResourceCount={props.setResourceCount} setShowMoreCards={props.setShowMoreCards}
            setLoading={props.setLoading}
          />
          <NewResourceModal 
            open={addNewResource} setOpen={setAddNewResource} 
            handleClose={() => handleAddNewResourceClose(handleIconReset())} 
            handleAbort={() => handleAddNewResourceAbort(handleIconReset())}
            handleCancel={() => handleAddNewResourceAbort(handleIconReset())}
            addingNewResourceSQL={addingNewResourceSQL}
            setNewURL={setNewURL} domain={domain} errorBlank={errorBlank}
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

        </React.Fragment>
      }
    </div>
  );
};

export default AddResourceFlow