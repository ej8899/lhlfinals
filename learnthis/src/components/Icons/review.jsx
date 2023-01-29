import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import RateReviewIcon from '@mui/icons-material/RateReview';
import React from 'react';
import Fade from '@mui/material/Fade';

export const RateStats = (props) => {

  return (
    <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
    <Tooltip title="Rate & Review Lesson">
      <IconButton aria-label="rate & add review" sx={{color: `${props.rate}`, "&:hover": {color: 'teal'} }} onClick={() => props.rateReview}>
        <RateReviewIcon />
      </IconButton>
    </Tooltip>
  </Fade>
  )
}

export const RateStaleStats = (props) => {

  return (
    <Tooltip title="Rate & Review Lesson">
      <IconButton aria-label="rate & add review" sx={{color:`${props.rate}`, "&:hover": {color: 'teal'} }} onClick={props.rateReview}>
        <RateReviewIcon />
      </IconButton>
    </Tooltip>
  )  
}