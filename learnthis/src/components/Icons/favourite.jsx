import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import Fade from '@mui/material/Fade';


export const FavouriteStats = (props) => {

  return (
    <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
    <Tooltip title="Add to Favourites">
      <IconButton aria-label="add to favourites" sx={{ color: `${props.favourite}`, "&:hover": {color: "pink"} }}  onClick={props.addFavourites}>
        <FavoriteIcon />
      </IconButton>
    </Tooltip>
    </Fade>
  )
}

export const FavouriteStaleStats = (props) => {

  return (
    <Tooltip title="Add to Favourites">
      <IconButton aria-label="add to favourites" sx={{ color: `${props.favourite}`, "&:hover": {color: "pink"} }}  onClick={props.addFavourites}>
        <FavoriteIcon />
      </IconButton>
    </Tooltip>
  )  
}
