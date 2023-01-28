import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import Fade from '@mui/material/Fade';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export const MoreStats = (props) => {

  return (
    <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
    <Tooltip title="Click for More Options!">
      <IconButton aria-label="share" sx={{ bgcolor: "#f5f5f5", color: `${props.more}`, "&:hover": {color: "warning"} }} onClick={props.addMore}>
        <MoreVertIcon />
      </IconButton>
    </Tooltip>
  </Fade>
  )
}

export const MoreStaleStats = (props) => {

  return (
    <Tooltip title="Share">
      <IconButton aria-label="share" sx={{color: `${props.share}`, "&:hover": {color: 'purple'} }} onClick={props.addShare}>
      <MoreVertIcon />
      </IconButton>
    </Tooltip>
  )  
}
