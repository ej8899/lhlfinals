// --------------------------------------------------------
// React Imports
import React from 'react';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import IconButton from '@mui/material/IconButton';
import StarHalfIcon from '@mui/icons-material/StarHalf'
// --------------------------------------------------------


export const StarRating = (props) => {

  // Star Rating Generator NOT USED
  // const Stars = (props) => {
  //   const stars = Math.round(props.rating * 100) / 100;
  //   const finalstars = [];
  //   for (let i=0; i<Math.trunc(stars); i++) {
  //     finalstars.push(<StarIcon key={i}/>)
  //   }
  //   stars-Math.trunc(stars) < 0.2 ? finalstars.push(<StarBorderIcon key={4}/>) : stars-Math.trunc(stars) > 0.9 ? finalstars.push(<StarIcon key={4}/>): finalstars.push(<StarHalfIcon key={4}/>)
  //   for (let j=0; j<5-Math.trunc(stars)-1; j++) {
  //     finalstars.push(<StarBorderIcon key={j+5}/>)
  //   }

  //   return (
  //     <React.Fragment>
  //       {finalstars}
  //     </React.Fragment>
  //   )
  // }

  // return (
  //   <Tooltip title={props.ratingScore} >
  //     <IconButton sx={{ "&:hover": {color: 'orange', cursor: "auto"} }}>
  //       <Stars rating={props.rating} />
  //     </IconButton>
  //   </Tooltip>
  // )
// }

  return (
    <Stack spacing={1}>
      <Tooltip title={props.ratingScore} >
      <IconButton sx={{ "&:hover": { cursor: "auto"} }}>
        <Rating name="half-rating-read" defaultValue={props.rating} precision={0.5} readOnly />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}






 
export const StarStaleRating = (props) => {

  // Hover over works to turn the hollow stars coloured hollow but doesn't work for tooltips or spacing
  // if(props.star === 0) {
  //   return (
  //     <Tooltip key={0} title='1 Star'>
  //     <IconButton aria-label="share" sx={{height: 35, paddingRight:"32px", "&:hover": {color: 'orange', backgroundColor: '#fff'} }} onClick={(event) => props.addStar(event, 0)}>
  //       <StarBorderIcon/>
  //       <Tooltip key={1} title='2 Stars'>
  //       <IconButton aria-label="share" sx={{ height: 35, paddingRight:"24px", "&:hover": {color: 'orange', backgroundColor: '#fff'} }} onClick={(event) => props.addStar(event, 1)}>
  //         <StarBorderIcon/>
  //         <Tooltip key={2} title='3 Stars'>
  //         <IconButton aria-label="share" sx={{height: 35,  paddingRight:"16px", "&:hover": {color: 'orange', backgroundColor: '#fff'} }} onClick={(event) => props.addStar(event, 2)}>
  //           <StarBorderIcon/>
  //           <Tooltip key={3} title='4 Stars'>
  //           <IconButton aria-label="share" sx={{height: 35, paddingRight:"8px", "&:hover": {color: 'orange', backgroundColor: '#fff'} }} onClick={(event) => props.addStar(event, 3)}>
  //             <StarBorderIcon/>
  //             <Tooltip key={4} title='5 Stars'>
  //             <IconButton aria-label="share" sx={{height: 35, "&:hover": {color: 'orange', backgroundColor: '#fff'} }} onClick={(event) => props.addStar(event, 4)}>
  //               <StarBorderIcon/>
  //             </IconButton>
  //             </Tooltip>
  //           </IconButton>
  //           </Tooltip>
  //         </IconButton>
  //         </Tooltip>
  //       </IconButton>
  //       </Tooltip>
  //     </IconButton>
  //     </Tooltip>
  //   )
  // }

  // // Manual Star rating - NOW USED
  // const rating = [];
  // const fullStars = props.star;
  // const emptyStars = 5 - props.star;
  // let index = 0

  // const WholeStarRating = (num) => {
  //   let numStars = ""
  //   if (num === 0) {
  //     numStars = `Rate ${num + 1} Star`
  //   } else {
  //     numStars = `Rate ${num + 1} Stars`
  //   }

  //   return (
  //     <Tooltip key={num} title={numStars}>
  //       <IconButton key={num} aria-label="share" sx={{ color: 'orange', "&:hover": {color: 'orange', backgroundColor: '#fff'}}} onClick={(event) => props.addStar(event, num)}>
  //         <StarIcon/>
  //       </IconButton>
  //     </Tooltip>
  //   )  
  // }

  // const EmptyStarRating = (num) => {
  //   let numStars = ""
  //   if (num === 0) {
  //     numStars = `Rate ${num + 1} Star`
  //   } else {
  //     numStars = `Rate ${num + 1} Stars`
  //   }

  //   return (
  //     <Tooltip key={num} title={numStars}>
  //       <IconButton key={num} aria-label="share" sx={{"&:hover": {color: 'orange', backgroundColor: '#fff'} }} onClick={(event) => props.addStar(event, num)}>
  //         <StarBorderIcon key={num}/>
  //       </IconButton>
  //     </Tooltip>
  //   )  
  // }

  // for (let y = 0; y < fullStars; y++) {
  //   rating.push(WholeStarRating(index))
  //   index ++
  // }

  // for (let x = 0; x < emptyStars; x++) {
  //   rating.push(EmptyStarRating(index))
  //   index ++
  // }
//All above in this function is not needed or used

  return (
    <IconButton aria-label="share">
      <Rating 
        name="simple-controlled"
        value={props.star}
        onChange={(event, newValue) => {
        props.addStar(newValue);
        }}
        precision={0.5} 
        disabled={props.disabled}
      />
    </IconButton>
  )  
}