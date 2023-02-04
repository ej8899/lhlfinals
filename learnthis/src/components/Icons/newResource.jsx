// --------------------------------------------------------
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import { Tooltip } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

// --------------------------------------------------------

export const NewResource = (props) => {

  return (
    <div >
    <Tooltip title="Add New Resource">
      <IconButton 
        fontSize="large"
        aria-label="add to playlist" 
        onClick={props.handleNewResourceOpen}
        sx={{
          position: 'absolute !important',
          zIndex: 1,
          top: 75,
          right: 20,
          "&:hover" : {backgroundColor : "transparent"}
        }}
        >
          <AddCircleIcon  color="primary" sx={{ fontSize: "60px" }}/>
      </IconButton>
    </Tooltip>
    </div>
  )
}
