import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import React from 'react';
import Fade from '@mui/material/Fade';


export const LessonStats = (props) => {

  return (
    <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
      <Tooltip title="Add to Lesson Plan">
        <IconButton aria-label="add to lesson plan" sx={{color: `${props.lesson}`, "&:hover": {color: 'blue'} }} onClick={props.addLesson}>
          <NoteAddIcon/>
        </IconButton>
      </Tooltip>
    </Fade>
  )
}

export const LessonStaleStats = (props) => {

  return (
    <Tooltip title="Add to Lesson Plan">
      <IconButton aria-label="add to lesson plan" sx={{ color:`${props.lesson}`, "&:hover": {color: 'blue'} }} onClick={props.addLesson}>
        <NoteAddIcon/>
      </IconButton>
    </Tooltip>
  )  
}