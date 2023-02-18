// --------------------------------------------------------
// React Imports
import React from 'react';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Collapse from '@mui/material/Collapse';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports
import DoneIcon from '@mui/icons-material/Done';
// --------------------------------------------------------


export const Complete = (props) => {

  const StyledBadgeNew = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 10,
      top: 20,
      border: `2px solid ${theme.palette.background.paper}`,
      borderRadius: "50%",
      padding: '0px 4px',
      backgroundColor:"#00e676",
      overflow: "auto",
      width: "3.5em",
      height: "3.5em",
      variant: "circular",
      display : props.display,
      zIndex : "150"
    },
  }));

  return (
    <Collapse in={!props.nowloading}>
      <StyledBadgeNew badgeContent={<DoneIcon/>}></StyledBadgeNew>
    </Collapse>
  )
}
