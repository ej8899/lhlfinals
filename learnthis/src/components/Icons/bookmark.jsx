// --------------------------------------------------------
// React Imports
import React from 'react';
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

export const BookmarkStats = (props) => {

  return (
    <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
      <Tooltip title="Save for Later">
        <IconButton aria-label="save for later" sx={{color: `${props.bookmark}`, "&:hover": {color: 'green'} }} onClick={props.addBookmark}>
          <BookmarkAddIcon />
        </IconButton>
      </Tooltip>
    </Fade>
  )
}

export const BookmarkStaleStats = (props) => {

  return (
    <Tooltip title="Save for Later">
      <IconButton aria-label="save for later" sx={{ color: `${props.bookmark}`, "&:hover": {color: 'green'} }} onClick={props.addBookmark}>
        <BookmarkAddIcon />
      </IconButton>
    </Tooltip>
  )  
}
