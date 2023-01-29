import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import Fade from '@mui/material/Fade';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box'

// Import Icon States
import { LessonStaleStats } from './lesson';
import { BookmarkStaleStats } from './bookmark';
import { RateStaleStats } from './review';
import { PlaylistStaleStats } from './playlist';
import { ReportStaleStats } from './report';


export const MoreStats = (props) => {

  const open = Boolean(props.anchorEl);

  let bgColor =  "#f5f5f5";
  if (localStorage.getItem('isDarkMode') === "dark") {
    bgColor = "#424242"
  }

  return (
    <Fade in={!props.nowloading} timeout={{ enter: props.skeletonTimer }}>
      <div>
    <Tooltip title="Click for More Options!">
      <IconButton 
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={props.handleClick}
      aria-label="share" 
      sx={{ bgcolor: bgColor, color: `${props.more}`, "&:hover": {color: "warning"} }}>
        <MoreVertIcon />
      </IconButton>
    </Tooltip>
    <Menu
        id="basic-menu"
        anchorEl={props.anchorEl}
        open={open}
        onClose={props.handleCloseOut}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        display="flex"
        flex-direction="column"
      >
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" textAlign="center">
          <MenuItem onClick={props.handleCloseOut}><RateStaleStats rate={props.rate} rateReview={() => props.rateReview(true, props.handleOpen())}/></MenuItem>
          <MenuItem onClick={props.handleCloseOut}><LessonStaleStats lesson={props.lesson} addLesson={props.addLesson}/></MenuItem>
          <MenuItem onClick={props.handleCloseOut}><BookmarkStaleStats bookmark={props.bookmark} addBookmark={props.addBookmark}/></MenuItem>
          <MenuItem onClick={props.handleCloseOut}><PlaylistStaleStats playlist={props.playlist} addPlaylist={props.addPlaylist}/></MenuItem>
          <MenuItem onClick={props.handleCloseOut}><ReportStaleStats report={props.report} addReport={props.addReport}/></MenuItem>
        </Box>
      </Menu>
      </div>
  </Fade>
  )
}

// Not used
// export const MoreStaleStats = (props) => {

//   return (
//     <Tooltip title="Share">
//       <IconButton aria-label="share" sx={{color: `${props.share}`, "&:hover": {color: 'purple'} }} onClick={props.addShare}>
//       <MoreVertIcon />
//       </IconButton>
//     </Tooltip>
//   )  
// }
