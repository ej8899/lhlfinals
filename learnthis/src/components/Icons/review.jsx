import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import Fade from '@mui/material/Fade';
import PreviewIcon from '@mui/icons-material/Preview';

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