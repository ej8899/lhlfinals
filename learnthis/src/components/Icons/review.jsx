// --------------------------------------------------------
// React Imports
import React, { useEffect, useRef, useState, useContext } from "react";
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports
import IconButton from '@mui/material/IconButton';
import PreviewIcon from '@mui/icons-material/Preview';
import RateReviewIcon from '@mui/icons-material/RateReview';
// --------------------------------------------------------

//---------------------------------------------------------
// Import user authentication
import { AuthContext } from '../../hooks/handleUsers.js';
//---------------------------------------------------------

export const RateStats = (props) => {

  const { isAuth, user, userid, logout } = useContext(AuthContext);

  return (
    <React.Fragment>
      {userid &&
        <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
          <Tooltip title="Rate & Review Lesson">
            <IconButton aria-label="rate & add review" sx={{color: `${props.rate}`, "&:hover": {color: 'teal'} }} onClick={() => props.rateReview}>
              <RateReviewIcon />
            </IconButton>
          </Tooltip>
        </Fade>
      }
      {!userid &&
        <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
          <IconButton aria-label="rate & add review" disabled>
            <RateReviewIcon />
          </IconButton>
        </Fade>
      }
    </React.Fragment>
  )
}

export const RateStaleStats = (props) => {

  const { isAuth, user, userid, logout } = useContext(AuthContext);

  return (
    <React.Fragment>
      {userid &&
        <Tooltip title="Rate & Review Lesson">
          <IconButton aria-label="rate & add review" sx={{color:`${props.rate}`, "&:hover": {color: 'teal'} }} onClick={props.rateReview}>
            <RateReviewIcon />
          </IconButton>
        </Tooltip>
      }
      {!userid &&
        <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
          <IconButton aria-label="rate & add review" disabled>
            <RateReviewIcon />
          </IconButton>
        </Fade>
      }
    </React.Fragment>
  )  
}