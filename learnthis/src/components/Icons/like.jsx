import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import Fade from '@mui/material/Fade';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

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
    if (count >= 1 && count <= 20 ) {
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


  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -4,
      top: -3,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (

    <Tooltip title="Video Likes">
      <IconButton aria-label={notificationsLabel(props.likes)} sx={{color: `${props.like}`, "&:hover": {color: 'purple'} }} onClick={props.addLike}>
        <StyledBadge badgeContent={props.likes} color={badgeColour(props.likes)} showZero>
          <ThumbUpIcon />
        </StyledBadge>
      </IconButton>
    </Tooltip>
  )
}

export const LikeStaleStats = (props) => {

  return (
    <Tooltip title="Like Video">
      <IconButton aria-label="like video" sx={{color: `${props.like}`, "&:hover": {color: 'purple'} }} onClick={props.addLike}>
        <ThumbUpIcon />
      </IconButton>
    </Tooltip>
  )  
}
