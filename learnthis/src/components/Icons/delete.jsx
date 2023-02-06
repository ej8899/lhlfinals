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
import DeleteIcon from '@mui/icons-material/Delete';
// --------------------------------------------------------

//---------------------------------------------------------
// Import user authentication
import { AuthContext } from '../../hooks/handleUsers.js';
//---------------------------------------------------------

export const DeleteStaleStats = (props) => {

  const { isAuth, user, userid, logout } = useContext(AuthContext);

  return (
    <React.Fragment>
      {userid === props.profile_id &&
        <Tooltip title="Delete My Resource">
          <IconButton onClick={() => props.handleOpenDelete()} sx={{color: `${props.deleteIcon}`, "&:hover" : {color : "red"}}} >
            <DeleteIcon/>
          </IconButton>
        </Tooltip>
      }
      {userid !== props.profile_id &&
        <IconButton disabled>
          <DeleteIcon/>
        </IconButton>
      }
    </React.Fragment>
  )  
}
