import React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Collapse from '@mui/material/Collapse';

export const NewBadge = (props) => {

  const StyledBadgeNew = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -15,
      top: -8,
      border: `2px solid ${theme.palette.background.paper}`,
      borderRadius: "50%",
      padding: '0px 4px',
      backgroundColor:"#f50057",
      overflow: "auto",
      width: "4em",
      height: "4em",
      variant: "circular",
      transform: "rotate(15deg)",
      display : props.display,
      zIndex : "150"
    },
  }));

  return (
    <Collapse in={!props.nowloading}>
      <StyledBadgeNew badgeContent={<b>NEW</b>}></StyledBadgeNew>
    </Collapse>
  )
}
