import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import Fade from '@mui/material/Fade';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Badge from '@mui/material/Badge';

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
    if (count > 1 && count <= 20 ) {
      return 'warning';
    }
    if (count > 20 && count <= 60 ) {
      return 'primary';
    }
    if (count > 60 && count <= 100 ) {
      return 'secondary';
    }
    if (count > 100) {
      return 'success';
    }
    return `${count} notifications`;
  }
  return (

    <Tooltip title="Video Likes">
      <IconButton aria-label={notificationsLabel(props.likes)}>
        <Badge badgeContent={props.likes} color={badgeColour(props.likes)} showZero>
          <ThumbUpIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  )
}

export const LikeStaleStats = (props) => {

  return (
    <Tooltip title="Like Video">
      <IconButton aria-label="like video" sx={{color: `${props.like}`, "&:hover": {color: 'indigo'} }} onClick={props.addLike}>
        <ThumbUpIcon />
      </IconButton>
    </Tooltip>
  )  
}