import React, { useEffect, useRef, useState, useContext } from "react";
import "./lessonhero.scss";
import zlog from '../../helpers/zlog';

// MUI
import ImageList from '@mui/material/ImageList';
import Paper from '@mui/material/Paper';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Tooltip from '@mui/material/Tooltip';
import { flexbox } from '@mui/system';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { FilterContext } from "../../helpers/filter";



// TODO - tooltips for each item

export default function LessonHeroList(props) {

  //
// icons here: https://devicon.dev/
//
const itemData = [
  {
    img: 'devicon-react-original',
    title: 'React',
  },
  {
    img: 'devicon-javascript-plain',
    title: 'JavaScript',
  },
  {
    img: 'devicon-postgresql-plain',
    title: 'SQL',
  },
  {
    img: 'devicon-html5-plain',
    title: 'HTML',
  },
  {
    img: 'devicon-css3-plain',
    title: 'CSS',
  },
  {
    img: 'devicon-ruby-plain',
    title: 'Ruby',
  },
  {
    img: 'devicon-vscode-plain',
    title: 'VS Code',
  },
  {
    img: 'devicon-python-plain',
    title: 'Python',
  },
  {
    img: 'devicon-sass-original',
    title: 'Sass',
  },
  {
    img: 'devicon-php-plain',
    title: 'PHP',
  },
  {
    img: 'devicon-nextjs-original',
    title: 'Next.js',
  },
  {
    img: 'devicon-swift-plain',
    title: 'Swift',
  },
];

  const { filterData } = useContext(FilterContext);

  const handleClick = (e,key) => {
    zlog('action',"lesson text: ",e);
    zlog('action',"lesson id: ",key);
    filterData("lesson", e, props.setsampledata, props.sampledata, props.combinedData, true, props.setLoading, true, props.setResourceCount, props.setShowMoreCards)
  };

  const paperStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:'center',
    height:'134px',
  };

  return (
    
    <center><br/><br/>
    <Grid container spacing={0} width={1400} sx={{ p:0, m:0 }}>
        <Grid item xs={6}  sx={{ p:0, m:0 }}>
        <Typography variant="h4" gutterBottom sx={{textAlign: "left",p:0, m:0 }}>Browse Lesson Topics...</Typography>
        </Grid>
        <Grid item xs={6}  sx={{ p:0, m:0, display: "flex", alignItems:"end", justifyContent:'flex-end' }}>
        <Typography variant="h6" gutterBottom sx={{display: "flex", textAlign: "right",p:0, m:0, alignItems:"center", justifyContent:"flex-end" }}>Browse all <ArrowForwardIcon/></Typography>
        </Grid>
    </Grid>

    <ImageList sx={{ width: 1400, height: 305, p:0,m:0, justify:'flex-start', alignItems:'center', alignContent:'flex-start',}} cols={6}>
      {itemData.map((item,key) => (
        
        <Paper key={key} sx={{ display:'flex',alignItems:'center',justifyContent:'center',height:'150px',border:'0px', m:0,p:0, borderColor:'red', borderStyle:'solid'}}>
        
        <ImageListItem key={item.img}  sx={{ display:'flex',alignItems:'center',justifyContent:'center', border:'0px', m:0,p:0, borderColor:'orange', height:'150px', borderStyle:'solid',}} onClick={()=>handleClick(item.title,key)}>
        
          <Tooltip arrow followCursor title={item.title}>
          <i sx={{height:'125px'}} className={[item.img,"lessonheroicon",""].join(' ')}></i>          
          </Tooltip>
        
        </ImageListItem>

        </Paper>
        
      ))}
    </ImageList>
    <br/>
    </center>
    
  );
}

