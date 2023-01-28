import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import Fade from '@mui/material/Fade';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

export const ReportStats = (props) => {

  return (
    <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
    <Tooltip title="Report Video">
      <IconButton aria-label="report video" sx={{color: `${props.report}`, "&:hover": {color: 'red'} }} onClick={props.addReport}>
        <ReportGmailerrorredIcon />
      </IconButton>
    </Tooltip>
  </Fade>
  )
}

export const ReportStaleStats = (props) => {

  return (
    <Tooltip title="Report Video">
      <IconButton aria-label="report video" sx={{color: `${props.report}`, "&:hover": {color: 'red'} }} onClick={props.addReport}>
        <ReportGmailerrorredIcon />
      </IconButton>
    </Tooltip>
  )  
}
