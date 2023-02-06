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
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
// --------------------------------------------------------

//---------------------------------------------------------
// Import user authentication
import { AuthContext } from '../../hooks/handleUsers.js';
//---------------------------------------------------------

export const PlaylistStats = (props) => {

  const { isAuth, user, userid, logout } = useContext(AuthContext);

  return (
    <React.Fragment>
      {userid &&
        <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
          <Tooltip title="Add to Playlist">
            <IconButton aria-label="add to playlist" sx={{color: `${props.playlist}`, "&:hover": {color: 'maroon'} }} onClick={props.addPlaylist}>
              <PlaylistAddIcon />
            </IconButton>
          </Tooltip>
        </Fade>
      }
      {!userid &&
        <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
          <IconButton aria-label="add to playlist" disabled>
            <PlaylistAddIcon />
          </IconButton>
        </Fade>
      }
    </React.Fragment>
  )
}

export const PlaylistStaleStats = (props) => {

  const { isAuth, user, userid, logout } = useContext(AuthContext);

  return (
    <React.Fragment>
      {userid && 
        <Tooltip title="Add to Playlist">
          <IconButton aria-label="add to playlist" sx={{color: `${props.playlist}`, "&:hover": {color: 'maroon'} }} onClick={props.addPlaylist}>
            <PlaylistAddIcon />
          </IconButton>
        </Tooltip>
      }
      {!userid &&
        <IconButton aria-label="add to playlist" disabled>
          <PlaylistAddIcon />
        </IconButton>
      }
    </React.Fragment>
  )  
}
