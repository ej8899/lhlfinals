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
          <Tooltip title="View Lesson">
            <IconButton aria-label="rate & add review" sx={{color: `${props.rate}`, "&:hover": {color: 'teal'} }} onClick={() => props.rateReview}>
              <PreviewIcon />
            </IconButton>
          </Tooltip>
        </Fade>
      }
      {!userid &&
        <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
          <IconButton aria-label="rate & add review" disabled>
            <PreviewIcon />
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
        <Tooltip title="View Lesson">
          <IconButton aria-label="rate & add review" sx={{color:`${props.rate}`, "&:hover": {color: 'teal'} }} onClick={props.rateReview}>
            <PreviewIcon />
          </IconButton>
        </Tooltip>
      }
      {!userid &&
        <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
          <IconButton aria-label="rate & add review" disabled>
            <PreviewIcon />
          </IconButton>
        </Fade>
      }
    </React.Fragment>
  )  
}