// --------------------------------------------------------
// React Imports
import React from "react";
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// --------------------------------------------------------



// ExpandMore Button for preview cards
export const ExpandMore = styled((props) => {

  const { expand, ...other } = props;

  return <IconButton sx={{ "&:hover": {backgroundColor: 'orange'} }} {...other} />;
})

(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const ExpandIcon = (props) => {

  return (
    <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
      <Tooltip title="Click for Video Description">
        <ExpandMoreIcon fontSize="small"/>
      </Tooltip>
    </Fade>
  )
}
