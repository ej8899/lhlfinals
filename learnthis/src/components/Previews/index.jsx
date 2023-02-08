// --------------------------------------------------------
// React Imports
import React, { useEffect, useRef, useState, useContext } from "react";
import axios from "axios"; // npx install axios
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// --------------------------------------------------------

// --------------------------------------------------------
// CSS/SCSS Imports
import './Previews.css';
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
import Tooltip from '@mui/material/Tooltip';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports
import YouTubeIcon from '@mui/icons-material/YouTube';
// --------------------------------------------------------

// --------------------------------------------------------
// Import Manual Field Functions
// --------------------------------------------------------

// --------------------------------------------------------
// Import Helper Functions
import zlog from "../../helpers/zlog";
import { randomNumber, randomColor, truncateText, colorGenerator, extractDomain } from "../../helpers/helpers";
// --------------------------------------------------------

// --------------------------------------------------------
// Import Icons Functions
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
// Import Modals
import { DeleteModal } from "../ItemDetail/delete";
import { EditResourceModal } from "../ItemDetail/edit";
import { ResultModal } from "../NewResource/result";
import { DetailModal }  from "../ItemDetail/index.jsx";
import { ShareModal } from "../Modal/share";
import { StatusModal } from "../NewResource/status";
import { SharedModal } from "../Modal/shared";
import { ViewDetailModal } from "../ItemDetail/view";
// --------------------------------------------------------

// --------------------------------------------------------
// Import State Hooks
import StateStatus from '../../hooks/state';

// Import Icon Hooks/Status
import IconStatus from '../../hooks/iconStatus'
// --------------------------------------------------------

//---------------------------------------------------------
// Import user authentication
import { AuthContext } from '../../hooks/handleUsers.js';
//---------------------------------------------------------



// TODO - any benefit to removing react-youtube and rolling our own variant?
export const PreviewItem = (props) => {

  // window.location.reload(true);

// --------------------------------------------------------
  // Import Hooks
  const {
    domain, 
    setDomain,

    openDeleted, 
    setOpenDeleted,
    openDeleting,
    setOpenDeleting,
    handleDeletingClose,
    handleOpenDeleting,
    handleDeletedClose,
    handleDeletedOpen,

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

    openReview, 
    setOpenReview,
    handleReviewOpen,
    handleReviewClose,

    categoryExpanded,
    setCategoryExpanded,

    videoURL,
    setVideoURL,
    videoId,
    setVideoId,

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

    errorEmail, 
    setErrorEmail,
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
    handleAddNewResourceAbort,
    errorFetchingNewResource, 
    setFetchingErrorNewResource,
    handleErrorFetchingNewResourceClose
  } = StateStatus();
// --------------------------------------------------------

// --------------------------------------------------------
// Import Icon Status
  const {
    resourceKey,
    setResourceKey,

    handleIconReset,

    deleteIcon,
    setDeleteIcon,
    addDeleteIcon,

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
// Use effect - initial load from database
  useEffect(() => {
    setOpen(false)

    setVideoURL(props.videoURL)
    setTitle(props.title)
    setDescriptionExpanded(props.description)
    setThumbnail(props.thumbnail);
    addNewIcon(props.created_at)

    addSetStage(props.stage)
    setLikes(props.likes)
    
    setDomain(extractDomain(props.videoURL))
    
    if (props.category.length === 0) {
      setCategory(`Category: TBD`)
    } else {
      let displayCategories = "Category: "
      props.category.forEach((element, index) => {
        index === 0 ? displayCategories += element : displayCategories += `, ${element}`
      });
      setCategoryExpanded(displayCategories)
      setCategory(truncateText(displayCategories, 28))
    }

    setMyCategory(props.myCategory)
    setMyStage(props.myStage)
    setMyComments(props.myComments)
    setStar(props.star)

    tmpsetMyCategory(props.myCategory)
    tmpsetMyStage(props.myStage)
    tmpsetMyComments(props.myComments)
    tmpsetStar(props.star)

    tmpsetTitle(props.title)
    tmpsetDescriptionExpanded(props.description)

    setResourceKey(props.id)

  }, [videoId]);
// --------------------------------------------------------

// --------------------------------------------------------
// Deleting Resource from SQL database
// TODO -- need to tie to database call
  const deletingResourceSQL = () => {
    setOpenDeleting(true)
    setOpenDelete(false)
    setOpen(false)
    const deleteURLResource = props.sampledata.filter(
      resource => resource.id !== props.id
    )
  // TODO -- setting the state is included in the timeout until database update happens with backendcode
    setTimeout(() => {
      setOpenDeleting(false)
      props.setOpenDeleted(true)
      props.setsampledata(deleteURLResource);
    }, 2000)
  }
// --------------------------------------------------------

// --------------------------------------------------------
// Updating Resource SQL database
// TODO -- need to tie to database call
  const updatingResourceSQL = () => {
    if (!tmptitle) {
      setErrorBlank(true)
    } else {
      setOpenEdit(false)
      setOpenEditing(true)
      setOpen(false)

      const updateURLResource = []
      props.sampledata.forEach(resource => {
      if (resource.id === props.id) {
        // updateURLResource.push({
        //   resource: {
        //     "id" : props.id,
        //     "profile_id": props.profile_id,
  
        //     "resource_id" : props.resource_id,
        //     "url": videoURL,
        //     "title": tmptitle,
        //     "description": tmpdescriptionExpanded,
        //     "thumbnail": thumbnail,
        //   },
        //   user: {
        //     "profile_id": userid,
        //     "myComments_public" : tmpmyComments,
        //     "myComments_private" : '',
        //     "myRating": tmpstar,
        //     "myRanking": tmpmyStage,
        //     "myCategories": tmpmyCategory,
        //     "is_liked" : like === "default" ? false : true,
        //     "is_favourite" : favourite === "default" ? false : true,
        //     "is_bookmarked" : bookmark === "default" ? false : true, 
        //     "is_playlist" : playlist === "default" ? false : true,
        //     "is_reported" : report === "default" ? false : true,
        //     "is_recommended" : lesson === "default" ? false : true
        //   }
        // })

        updateURLResource.push({
          "id" : props.id,
          "profile_id": props.profile_id,

          "resource_id" : props.resource_id,
          "videoURL" : videoURL,
          "title" : tmptitle,
          "thumbnail" : thumbnail,
          "description" : tmpdescriptionExpanded,
          "created_at" : props.created_at,
          "updated_at" : new Date().toISOString(),
          
          "category" : category,
          "stage" : stage,
          "rating" : props.rating,
          "likes" : likes,

          "myCategory" : tmpmyCategory,
          "myStage" : tmpmyStage,
          "star" : tmpstar,
          "myComments" : tmpmyComments
        })
      } else {
        updateURLResource.push(resource)
      }
    })
    // TODO -- setting the state is included in the timeout until database update happens with backendcode
      setTimeout(() => {
        setOpenEditing(false)
        setOpenEdited(true)
        props.setsampledata(updateURLResource);
        console.log(updateURLResource)
        setErrorBlank(true)

        setMyCategory(tmpmyCategory)
        setMyStage(tmpmyStage)
        setMyComments(tmpmyComments)
        setStar(tmpstar)

        setTitle(tmptitle)
        setDescriptionExpanded(tmpdescriptionExpanded)

        tmpReset()
      }, 2000)
    }
  }
// --------------------------------------------------------



// --------------------------------------------------------
  // TMP set state for Rate & Review & Edit

  // Resource Info
  const [tmptitle, tmpsetTitle] = useState(title);
  const [tmpdescriptionExpanded, tmpsetDescriptionExpanded] = useState(descriptionExpanded);

  // User info
  const [tmpmyComments, tmpsetMyComments] = useState(myComments);
  const tmpaddMyComments = (comments) => {
    tmpsetMyComments(comments)
  }

  const [tmpmyCategory, tmpsetMyCategory] = useState(myCategory);
  const tmpaddMyCategory = (category) => {
    tmpsetMyCategory(category)
  }

  const [tmpsliderActive, tmpsetSliderActive] = useState("grey")
  const [tmpmyStage, tmpsetMyStage] = useState(myStage)

  const tmpaddMyStage = (stage) => {
    tmpsetMyStage(stage)
    tmpsetSliderActive(false)
  }

  const [tmpstar, tmpsetStar] = useState(star)
  const tmpaddStar = (num) => {
    tmpsetStar(num)
  }

  const tmpReset = () => {
    tmpsetMyCategory(myCategory)
    tmpsetMyComments(myComments)
    tmpsetMyStage(myStage)
    tmpsetStar(star)
    tmpsetTitle(title)
    tmpsetDescriptionExpanded(descriptionExpanded)
  }
// --------------------------------------------------------

  const skeletonTimer = randomNumber(100,3000);
  const { isAuth, user, userid, logout } = useContext(AuthContext);


  return (
    <div>
      <Box display="flex" flexDirection="row" justifyContent="flex-end" overflow="visible" zIndex="1000" >
        {props.nowloading ? null : (
          <NewBadge display={newIcon} nowLoading={props.nowLoading}/>
        )}
      </Box>
      <Card sx={{ MaxWidth: 345 }} >
        <CardActionArea onClick={() => (handleReviewOpen(filter), setExpanded(false))} sx={{ filter: filter }}>
          {props.nowloading ? (
            <Skeleton sx={{ height: 140 }} animation="wave" variant="rectangular" />
          ) : (
            <Fade in={!props.nowloading} timeout={{ enter: skeletonTimer }}>
              <CardMedia
                component="img"
                height="140"
                image={thumbnail}
                alt={title}
                width="345"
              />
            </Fade>
          )}
          <CardHeader
            avatar={
              props.nowloading ? (
                <Skeleton animation="wave" variant="circular" width={40} height={40} />
              ) : (
                <Fade in={!props.nowloading} timeout={{ enter: skeletonTimer }}>
                  <Avatar style={{ backgroundColor: colorGenerator(props.stage)}} aria-label="recipe">
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
                  <Tooltip title={categoryExpanded}>
                    <Typography>
                      {category}
                    </Typography>
                  </Tooltip>
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
                  <Typography variant='h6' textAlign="center" marginBottom={'-25px'} lineHeight="105%" marginTop={"-15px"}>
                    {title}
                  </Typography>
                </Box>
              </CardContent>              
            </Fade>
          )}
        </CardActionArea>
        {props.nowloading ? (
          <Skeleton animation="wave" height={20} style={{marginLeft: 20}} width="85%" />
        ) : (
          <Fade in={!props.nowloading} timeout={{ enter: skeletonTimer }}>
            <CardContent sx={{ filter: filter }}>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center" 
              >
                {!props.rating &&
                  <StarRating ratingScore={`Overall User Rating: Unrated`} rating={props.rating} 
                />}
                {props.rating &&
                  <StarRating ratingScore={`Overall User Rating: ${props.rating}`} rating={props.rating} 
                />}
                <LikeStats like={like} addLike={() => addLike(filter)} likes={likes}/>
              </Box>
            </CardContent>
          </Fade>
        )}
        <div>
          <DetailModal 
            open={openReview} setOpen={setOpenReview} setExpanded={setExpanded}
            handleClose={() => handleReviewClose(tmpReset(), rateReview("close"))} 
            handleCancel={() => tmpReset(rateReview())}
            addingNewResourceSQL={updatingResourceSQL}
            videoURL={videoURL} domain={domain}
            title={tmptitle} id={props.id} thumbnail={thumbnail}
            typeCategory={props.typeCategory} 
            favourite={favourite} addFavourites={() => addFavourites(filter)}
            lesson={lesson} addLesson={addLesson}
            rate={rate} rateReview={rateReview}
            show={show}
            bookmark={bookmark} addBookmark={addBookmark}
            playlist={playlist} addPlaylist={addPlaylist}
            share={share} handleShareOpen={handleShareOpen}
            report={report} addReport={addReport}
            like={like} addLike={() => addLike(filter)} setLike={setLike} 
            star={tmpstar} addStar={tmpaddStar}
            myComments={tmpmyComments} addMyComments={tmpaddMyComments}
            myCategory={tmpmyCategory} addMyCategory={tmpaddMyCategory}
            myStage={tmpmyStage} addMyStage={tmpaddMyStage}
            sliderActive={tmpsliderActive} setSliderActive={tmpsetSliderActive}
            openEdit={openEdit} setOpenEdit={setOpenEdit}
            handleOpenEdit={handleOpenEdit} handleEditClose={handleEditClose}
            openDelete={openDelete} setOpenDelete={setOpenDelete}
            handleDeleteClose={() => handleDeleteClose(addDeleteIcon(false))} handleOpenDelete={() => handleOpenDelete(addDeleteIcon(true))}
            profile_id={props.profile_id} deleteIcon={deleteIcon}
          />
        </div>
        {/* <div>
          <ViewDetailModal 
            open={open} setOpen={setOpen} setExpanded={setExpanded}
            handleClose={() => handleClose()} 
            handleReviewOpen={() => handleReviewOpen()}
            videoURL={videoURL} domain={domain}
            title={title} id={props.id} thumbnail={thumbnail}
            typeCategory={props.typeCategory} 
            favourite={favourite} addFavourites={() => addFavourites(filter)}
            lesson={lesson} addLesson={addLesson}
            rate={rate} rateReview={rateReview}
            show={show}
            bookmark={bookmark} addBookmark={addBookmark}
            playlist={playlist} addPlaylist={addPlaylist}
            share={share} handleShareOpen={handleShareOpen}
            report={report} addReport={addReport}
            like={like} addLike={() => addLike(filter)} setLike={setLike} 
            likes={likes} setLikes={setLikes}
            star={star} addStar={addStar}
            myComments={myComments} addMyComments={addMyComments}
            myCategory={myCategory} addMyCategory={addMyCategory}
            myStage={myStage} addMyStage={addMyStage}
            sliderActive={sliderActive} setSliderActive={setSliderActive}
            openEdit={openEdit} setOpenEdit={setOpenEdit}
            handleOpenEdit={handleOpenEdit} handleEditClose={handleEditClose}
            openDelete={openDelete} setOpenDelete={setOpenDelete}
            handleDeleteClose={handleDeleteClose} handleOpenDelete={handleOpenDelete}
            profile_id={props.profile_id}
          />
        </div> */}
        <div>
          <ShareModal 
            open={shareOpen} setShareOpen={setShareOpen} setExpanded={setExpanded}
            handleShareClose={() => handleShareClose(setErrorBlank(false))} 
            videoURL={videoURL} domain={domain}
            title={title} id={props.id}
            complexity={props.complexity} 
            typeCategory={props.typeCategory} 
            favourite={favourite} addFavourites={() => addFavourites(filter)}
            lesson={lesson} addLesson={addLesson}
            rate={rate} rateReview={rateReview}
            show={show} errorBlank={errorBlank} errorEmail={errorEmail}
            bookmark={bookmark} addBookmark={addBookmark}
            playlist={playlist} addPlaylist={addPlaylist}
            share={share} addShare={() => addShare(filter)}
            report={report} addReport={addReport}
            like={like} addLike={() => addLike(filter)} setLike={setLike}
            more={more} addMore={addMore} setMore={setMore}
            star={star} addStar={addStar}
            myComments={myComments} addMyComments={addMyComments}
            myComplexity={myComplexity} addMyComplexity={addMyComplexity}
            myCategory={myCategory} addMyCategory={addMyCategory}
            thumbnail={thumbnail} videoID={videoId}
            setStatusOpen={setSendingEmail} 
            sendEmail={sendEmail} emailMessage={emailMessage} emailMyMessage={emailMyMessage}
            emailTo={emailTo} emailMyTo={emailMyTo}
          />
            {/* {background && ( <Routes>
              <Route path="modal" element={shareModal} />
            </Routes>)} */}
            {/* {shareModal} */}
        </div>
        <div>
          <EditResourceModal 
            open={openEdit} setOpen={setOpenEdit} 
            handleClose={() => handleEditClose(tmpReset())} 
            handleAbort={() => handleEditClose(tmpReset())}
            handleCancel={() => handleEditClose(setOpenReview(true), tmpReset())}
            setNewURL={setNewURL} errorBlank={errorBlank}
            addingNewResourceSQL={updatingResourceSQL}
            videoURL={videoURL} thumbnail={thumbnail}
            title={tmptitle} setTitle={tmpsetTitle} domain={domain}
            descriptionExpanded={tmpdescriptionExpanded} setDescriptionExpanded={tmpsetDescriptionExpanded}
            typeCategory={props.typeCategory} 
            favourite={favourite} addFavourites={() => addFavourites(filter)}
            lesson={lesson} addLesson={addLesson}
            show={"flex"}
            bookmark={bookmark} addBookmark={addBookmark}
            playlist={playlist} addPlaylist={addPlaylist}
            like={like} addLike={() => addLike(filter)} setLike={setLike}
            star={tmpstar} addStar={tmpaddStar}
            myComments={tmpmyComments} addMyComments={tmpaddMyComments}
            myCategory={tmpmyCategory} addMyCategory={tmpaddMyCategory}
            myStage={tmpmyStage} addMyStage={tmpaddMyStage}
            sliderActive={tmpsliderActive} setSliderActive={tmpsetSliderActive}
          />
        </div>
        <div>
          <StatusModal 
            open={sendingEmail} message={"Sharing Resource"}
          />
        </div>
        <div>
          <DeleteModal
            handleClose={() => handleDeleteClose(addDeleteIcon(false))}
            open={openDelete} setOpenDelete={setOpenDelete}
            handleOpenDeleting={deletingResourceSQL}
            title={title} thumbnail={thumbnail}
          />
        </div>
        <div>
          <StatusModal 
            open={openDeleting} message={"Deleting Resource"}
          />
        </div>
        <div>
          <StatusModal 
            open={openEditing} message={"Updating Resource"}
          />
        </div>
        <div>
          <SharedModal
            open={emailSent} setEmailSent={setEmailSent} 
            handleSharedClose={() => handleSharedClose()} 
            thumbnail={thumbnail} title={title}
            emailTo={emailTo}
          /> 
        </div>
        <div>
          <ResultModal 
            open={openEdited} setStatusOpen={setOpenEdited} 
            handleClose={() => handleEditedClose(tmpReset())} 
            message={"Success! Resource has been updated."} 
            thumbnail={thumbnail} title={title}
            setsampledata={props.setsampledata} sampledata={props.sampledata}
            combinedData={props.combinedData}
            handleReviewClose={handleReviewClose}
          />
        </div>
        <Divider sx={{ filter: filter }}>
          {props.nowloading ? (
            <Skeleton animation="wave" variant="rounded" width={100} height={30} />
          ) : (
            <Fade in={!props.nowloading} timeout={{ enter: skeletonTimer }}>
              <Chip style={{ backgroundColor: colorGenerator(props.stage)}} label="More Actions" />
            </Fade>
          )}
        </Divider>
        <CardActions disableSpacing>
          <Box display="flex" width="100%" justifyContent="space-between" marginTop="-1rem">
            <Box paddingLeft="1rem">
              {props.nowloading ? (
                <Skeleton animation="wave" variant="circular" width={30} height={30} />
              ) : filter === 'blur(0px)' ? (
                <MoreStats nowLoading={props.nowLoading} skeletonTimer={skeletonTimer} 
                  more={more} addMore={addMore} 
                  lesson={lesson} addLesson={addLesson}
                  rate={rate} rateReview={rateReview}
                  bookmark={bookmark} addBookmark={addBookmark}
                  playlist={playlist} addPlaylist={addPlaylist}
                  report={report} addReport={addReport}
                  handleReviewOpen={() => handleReviewOpen(filter)}
                  anchorEl={anchorEl} setAnchorEl={setAnchorEl} 
                  handleCloseOut={handleCloseOut} handleClick={handleClick}
                  setExpanded={setExpanded}
                  handleOpenEdit={handleOpenEdit} 
                  handleOpenDelete={handleOpenDelete}
                  profile_id={props.profile_id}
                />
              ) : (
                <ReportStats nowloading={props.nowLoading} skeletonTimer={skeletonTimer} report={report} addReport={addReport} />
              )}
            </Box>
            <Box display="flex" paddingRight="1rem" sx={{ filter: filter }}>
              {props.nowloading ? (
                <Skeleton animation="wave" variant="circular" width={30} height={30} />
              ) : (
                <FavouriteStats nowloading={props.nowLoading} skeletonTimer={skeletonTimer} favourite={favourite} addFavourites={() => addFavourites(filter)}/>
              )}
              {props.nowloading ? (
                <Skeleton animation="wave" variant="circular" width={30} height={30} />
              ) : (
                <ShareStats nowLoading={props.nowLoading} skeletonTimer={skeletonTimer} share={share} addShare={() => handleShareOpen(setExpanded(false))} />
              )}
            </Box>
          </Box>  
        </CardActions>
        <Divider/>
        <CardContent style={{paddingBottom:"0", paddingTop:"0", filter: filter}}>
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
              onClick={() => handleExpandClick(filter)}
              aria-expanded={expanded}
              aria-label="show more"
            >
              {props.nowloading ? (
                <Skeleton animation="wave" variant="circular" width={30} height={30} />
              ) : (
                <ExpandIcon nowloading={props.nowLoading} skeletonTimer={skeletonTimer} />
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
    </div>
  );
};
// --------------------------------------------------------

export default PreviewItem