import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import Fade from '@mui/material/Fade';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

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
