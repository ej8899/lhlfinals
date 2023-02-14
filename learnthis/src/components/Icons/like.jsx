// --------------------------------------------------------
// React Imports
import React, { useEffect, useRef, useState, useContext } from "react";
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// --------------------------------------------------------

//---------------------------------------------------------
// Import user authentication
import { AuthContext } from '../../hooks/handleUsers.js';
//---------------------------------------------------------

export const LikeStats = (props) => {

  function notificationsLabel(count) {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
  }

  function badgeColour(count) {
    if (count === 0) {
      return 'error';
    }
    if (count >= 1 && count <= 10 ) {
      return 'warning';
    }
    if (count > 10 && count <= 20 ) {
      return 'primary';
    }
    if (count > 20 && count <= 30 ) {
      return 'secondary';
    }
    if (count > 30) {
      return 'success';
    }
    return `${count} notifications`;
  }


  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -4,
      top: -3,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  const { isAuth, user, userid, logout } = useContext(AuthContext);

  return (
    <React.Fragment>
      {userid &&
        <Tooltip title="Video Likes">
          <IconButton aria-label={notificationsLabel(props.likes)} sx={{color: `${props.like}`, "&:hover": {color: 'purple'} }} onClick={props.addLike}>
            <StyledBadge badgeContent={props.likes} color={badgeColour(props.likes)} showZero>
              <ThumbUpIcon />
            </StyledBadge>
          </IconButton>
        </Tooltip>
      }
      {!userid &&
        <IconButton aria-label={notificationsLabel(props.likes)} disabled>
          <StyledBadge badgeContent={props.likes} color={badgeColour(props.likes)} showZero>
            <ThumbUpIcon />
          </StyledBadge>
        </IconButton>
      }
    </React.Fragment>
  )
}

export const LikeStaleStats = (props) => {

  const { isAuth, user, userid, logout } = useContext(AuthContext);


  return (
    <React.Fragment>
      {userid &&
        <Tooltip title="Like Video">
          <IconButton aria-label="like video" sx={{color: `${props.like}`, "&:hover": {color: 'purple'} }} onClick={props.addLike}>
            <ThumbUpIcon />
          </IconButton>
        </Tooltip>
      }
      {!userid &&
        <IconButton aria-label="like video" disabled>
          <ThumbUpIcon />
        </IconButton>
      }
    </React.Fragment>
  )  
}
