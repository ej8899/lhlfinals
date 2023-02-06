// --------------------------------------------------------
// React Imports
import React, { useEffect, useRef, useState, useContext } from "react";
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
import Tooltip from '@mui/material/Tooltip';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports
import IconButton from '@mui/material/IconButton';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
// --------------------------------------------------------

//---------------------------------------------------------
// Import user authentication
import { AuthContext } from '../../hooks/handleUsers.js';
//---------------------------------------------------------

export const EditStaleStats = (props) => {

  const { isAuth, user, userid, logout } = useContext(AuthContext);

  return (
    <React.Fragment>
      {userid === props.profile_id &&
        <Tooltip title="Edit My Resource">
          <IconButton onClick={() => props.handleOpenEdit()} sx={{"&:hover" : {color : "orange"}}} >
            <NoteAltIcon/>
          </IconButton>
        </Tooltip>
      }
      {userid !== props.profile_id &&
        <IconButton disabled>
          <NoteAltIcon/>
        </IconButton>
      }
    </React.Fragment>
  )  
}
