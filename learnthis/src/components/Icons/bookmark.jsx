// --------------------------------------------------------
// React Imports
import React, { useEffect, useRef, useState, useContext } from "react";
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
import Fade from '@mui/material/Fade';
import Tooltip from '@mui/material/Tooltip';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import IconButton from '@mui/material/IconButton';
// --------------------------------------------------------

//---------------------------------------------------------
// Import user authentication
import { AuthContext } from '../../hooks/handleUsers.js';
//---------------------------------------------------------

export const BookmarkStats = (props) => {

  const { isAuth, user, userid, logout } = useContext(AuthContext);

  return (
    <React.Fragment>
      {userid &&
        <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
          <Tooltip title="Save for Later">
            <IconButton aria-label="save for later" sx={{color: `${props.bookmark}`, "&:hover": {color: 'green'} }} onClick={props.addBookmark}>
              <BookmarkAddIcon />
            </IconButton>
          </Tooltip>
        </Fade>
          }
          {!userid &&
            <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
              <IconButton aria-label="save for later" disabled>
                <BookmarkAddIcon />
              </IconButton>
            </Fade>
          }
          </React.Fragment>
  )
}

export const BookmarkStaleStats = (props) => {

  const { isAuth, user, userid, logout } = useContext(AuthContext);

  return (
    <React.Fragment>
      {userid &&
        <Tooltip title="Save for Later">
          <IconButton aria-label="save for later" sx={{ color: `${props.bookmark}`, "&:hover": {color: 'green'} }} onClick={props.addBookmark} >
            <BookmarkAddIcon />
          </IconButton>
        </Tooltip>
      }
      {!userid &&
        <IconButton aria-label="save for later" disabled>
          <BookmarkAddIcon />
        </IconButton>
      }
    </React.Fragment>
  )  
}
