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
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
// --------------------------------------------------------

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
