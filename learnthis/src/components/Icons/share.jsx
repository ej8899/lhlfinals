import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import Fade from '@mui/material/Fade';
import ShareIcon from '@mui/icons-material/Share';

export const ShareStats = (props) => {

  return (
    <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
    <Tooltip title="Share">
      <IconButton aria-label="share" sx={{color: `${props.share}`, "&:hover": {color: 'purple'} }} onClick={props.addShare}>
        <ShareIcon />
      </IconButton>
    </Tooltip>
  </Fade>
  )
}

export const ShareStaleStats = (props) => {

  return (
    <Tooltip title="Share">
      <IconButton aria-label="share" sx={{color: `${props.share}`, "&:hover": {color: 'purple'} }} onClick={props.addShare}>
        <ShareIcon />
      </IconButton>
    </Tooltip>
  )  
}