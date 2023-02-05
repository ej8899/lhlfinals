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
import ShareIcon from '@mui/icons-material/Share';
// --------------------------------------------------------

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