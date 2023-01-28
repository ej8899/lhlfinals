import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import Fade from '@mui/material/Fade';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

export const PlaylistStats = (props) => {

  return (
    <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
    <Tooltip title="Add to Playlist">
      <IconButton aria-label="add to playlist" sx={{color: `${props.playlist}`, "&:hover": {color: 'maroon'} }} onClick={props.addPlaylist}>
        <PlaylistAddIcon />
      </IconButton>
    </Tooltip>
  </Fade>
  )
}

export const PlaylistStaleStats = (props) => {

  return (
    <Tooltip title="Add to Playlist">
    <IconButton aria-label="add to playlist" sx={{color: `${props.playlist}`, "&:hover": {color: 'maroon'} }} onClick={props.addPlaylist}>
      <PlaylistAddIcon />
    </IconButton>
  </Tooltip>
  )  
}
