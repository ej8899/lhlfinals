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
import PreviewIcon from '@mui/icons-material/Preview';
// --------------------------------------------------------

export const RateStats = (props) => {

  return (
    <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
      <Tooltip title="View Lesson">
        <IconButton aria-label="rate & add review" sx={{color: `${props.rate}`, "&:hover": {color: 'teal'} }} onClick={() => props.rateReview}>
          <PreviewIcon />
        </IconButton>
      </Tooltip>
    </Fade>
  )
}

export const RateStaleStats = (props) => {

  return (
    <Tooltip title="View Lesson">
      <IconButton aria-label="rate & add review" sx={{color:`${props.rate}`, "&:hover": {color: 'teal'} }} onClick={props.rateReview}>
        <PreviewIcon />
      </IconButton>
    </Tooltip>
  )  
}