// --------------------------------------------------------
// React Imports
import React from 'react';
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

export const LessonStats = (props) => {

  return (
    <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
      <Tooltip title="Recommend Add to Lesson Plan">
        <IconButton aria-label="recommend add to lesson plan" sx={{color: `${props.lesson}`, "&:hover": {color: 'blue'} }} onClick={props.addLesson}>
          <NoteAddIcon/>
        </IconButton>
      </Tooltip>
    </Fade>
  )
}

export const LessonStaleStats = (props) => {

  return (
    <Tooltip title="Recommend Add to Lesson Plan">
      <IconButton aria-label="recommend add to lesson plan" sx={{ color:`${props.lesson}`, "&:hover": {color: 'blue'} }} onClick={props.addLesson}>
        <NoteAddIcon/>
      </IconButton>
    </Tooltip>
  )  
}
