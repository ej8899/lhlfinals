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
import FavoriteIcon from '@mui/icons-material/Favorite';
// --------------------------------------------------------

//---------------------------------------------------------
// Import user authentication
import { AuthContext } from '../../hooks/handleUsers.js';
//---------------------------------------------------------

export const FavouriteStats = (props) => {

  const { isAuth, user, userid, logout } = useContext(AuthContext);

  return (
    <React.Fragment>
      {userid &&
        <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
          <Tooltip title="Add to Favourites">
            <IconButton aria-label="add to favourites" sx={{ color: `${props.favourite}`, "&:hover": {color: "pink"} }}  onClick={props.addFavourites}>
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
        </Fade>
      }
      {!userid &&
        <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
          <IconButton aria-label="add to favourites" disabled>
            <FavoriteIcon />
          </IconButton>
        </Fade>
      }
    </React.Fragment>
  )
}

export const FavouriteStaleStats = (props) => {

  const { isAuth, user, userid, logout } = useContext(AuthContext);

  return (
    <React.Fragment>
      {userid &&
        <Tooltip title="Add to Favourites">
          <IconButton aria-label="add to favourites" sx={{ color: `${props.favourite}`, "&:hover": {color: "pink"} }}  onClick={props.addFavourites}>
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
      }
      {!userid &&
        <IconButton aria-label="add to favourites" disabled>
          <FavoriteIcon />
        </IconButton>
      }
    </React.Fragment>
  )  
}
