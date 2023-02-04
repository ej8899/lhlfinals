import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

export const CloseModal = (props) => {

  let bgColor =  "#f5f5f5";
  if (global.config.currentTheme === "dark") {
    bgColor = "#424242"
  }

  return (
    <Tooltip title="Close">
      <IconButton aria-label="close" sx={{bgcolor: bgColor, "&:hover": {color: 'red'} }} onClick={props.handleClose}>
        <CloseIcon />
      </IconButton>
    </Tooltip>
  )
}

// Not used
// export const CloseStaleModal = (props) => {

//   return (
//     <Tooltip title="Share">
//       <IconButton aria-label="share" sx={{color: `${props.share}`, "&:hover": {color: 'purple'} }} onClick={props.addShare}>
//         <CloseIcon />
//       </IconButton>
//     </Tooltip>
//   )  
// }
