import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import React from "react";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Tooltip from '@mui/material/Tooltip';

//
// returns true or false
//
export const isYoutubeUrl = (url) => {
  return (url.indexOf("youtube.com") !== -1 || url.indexOf("youtu.be") !== -1);
}
/* sample usage:
const youtubeUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
console.log(isYoutubeUrl(youtubeUrl)); // Outputs true

const nonYoutubeUrl = "https://www.google.com";
console.log(isYoutubeUrl(nonYoutubeUrl)); // Outputs false
*/

//
//
//
export const getYoutubeVideoId = (url) => {
  let videoId;
  try {
      const match = url.match(/(v=|youtu\.be\/)([^&]+)/);
      videoId = match[2];
  } catch (err) {
      console.error("Invalid YouTube URL: ", err);
  }
  return videoId;
}
// sample usage:
// const youtubeUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
// const videoId = getYoutubeVideoId(youtubeUrl);


  //
  // truncate long text
  //
export const truncateText = (text, limit) => {
  if (text.length > limit) {
      return text.substring(0, limit) + '...';
  } else {
      return text;
  }
}

// Random Number Generator
export const randomNumber = (min,max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ExpandMore Button for preview cards
export const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton sx={{ "&:hover": {backgroundColor: 'orange'} }} {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


// Random Colour for icon thumbnail
export function randomColor() {
  let hex = Math.floor(Math.random() * 0xFFFFFF);
  let color = "#" + hex.toString(16);

  return color;
}


// Star Rating Generator
export const Stars = (props) => {
  const stars = Math.round(props.rating * 100) / 100;
    const finalstars = [];
    for (let i=0; i<Math.trunc(stars); i++) {
      finalstars.push(<StarIcon key={i}/>)
    }
    stars-Math.trunc(stars) < 0.2 ? finalstars.push(<StarBorderIcon key={4}/>) : stars-Math.trunc(stars) > 0.9 ? finalstars.push(<StarIcon key={4}/>): finalstars.push(<StarHalfIcon key={4}/>)
    for (let j=0; j<5-Math.trunc(stars)-1; j++) {
      finalstars.push(<StarBorderIcon key={j+5}/>)
    }

    return (
      <React.Fragment>
        {finalstars}
      </React.Fragment>
    )
  }