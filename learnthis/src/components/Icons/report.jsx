// --------------------------------------------------------
// React Imports
import React, { useEffect, useRef, useState, useContext } from "react";
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

//---------------------------------------------------------
// Import user authentication
import { AuthContext } from '../../hooks/handleUsers.js';
//---------------------------------------------------------

export const ReportStats = (props) => {

  const { isAuth, user, userid, logout } = useContext(AuthContext);

  return (
    <React.Fragment>
      {userid &&
        <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
          <Tooltip title="Report Video">
            <IconButton aria-label="report video" sx={{color: `${props.report}`, "&:hover": {color: 'red'} }} onClick={props.addReport}>
              <ReportGmailerrorredIcon />
            </IconButton>
          </Tooltip>
        </Fade>
      }
      {!userid &&
        <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
          <IconButton aria-label="report video" disabled>
            <ReportGmailerrorredIcon />
          </IconButton>
        </Fade>
      }
    </React.Fragment>
  )
}

export const ReportStaleStats = (props) => {

  const { isAuth, user, userid, logout } = useContext(AuthContext);

  return (
    <React.Fragment>
      {userid &&
        <Tooltip title="Report Video">
          <IconButton aria-label="report video" sx={{color: `${props.report}`, "&:hover": {color: 'red'} }} onClick={props.addReport}>
            <ReportGmailerrorredIcon />
          </IconButton>
        </Tooltip>
      }
      {!userid &&
        <IconButton aria-label="report video" disabled>
          <ReportGmailerrorredIcon />
        </IconButton>
      }
    </React.Fragment>
  )  
}
