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
import NoteAddIcon from '@mui/icons-material/NoteAdd';
// --------------------------------------------------------

//---------------------------------------------------------
// Import user authentication
import { AuthContext } from '../../hooks/handleUsers.js';
//---------------------------------------------------------

export const LessonStats = (props) => {

  const { isAuth, user, userid, logout } = useContext(AuthContext);

  return (
    <React.Fragment>
      {userid &&
        <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
          <Tooltip title="Recommend Add to Lesson Plan">
            <IconButton aria-label="recommend add to lesson plan" sx={{color: `${props.lesson}`, "&:hover": {color: 'blue'} }} onClick={props.addLesson}>
              <NoteAddIcon/>
            </IconButton>
          </Tooltip>
        </Fade>
      }
      {!userid &&
        <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
          <IconButton aria-label="recommend add to lesson plan" disabled>
            <NoteAddIcon/>
          </IconButton>
        </Fade>
      }
    </React.Fragment>
  )
}

export const LessonStaleStats = (props) => {

  const { isAuth, user, userid, logout } = useContext(AuthContext);

  return (
    <React.Fragment>
      {userid &&
        <Tooltip title="Recommend Add to Lesson Plan">
          <IconButton aria-label="recommend add to lesson plan" sx={{ color:`${props.lesson}`, "&:hover": {color: 'blue'} }} onClick={props.addLesson}>
            <NoteAddIcon/>
          </IconButton>
        </Tooltip>
      }
      {!userid &&
        <IconButton aria-label="recommend add to lesson plan" disabled>
          <NoteAddIcon/>
        </IconButton>
      }
    </React.Fragment>
  )  
}
