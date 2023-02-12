import * as React from 'react';
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

const handleClick = (e,key) => {
  zlog('action',"lesson text: ",e);
  zlog('action',"lesson id: ",key);
};

// TODO - tooltips for each item

export default function LessonHeroList() {
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

    <ImageList sx={{ width: 1400, height: 330, p:0,m:0}} cols={6} rowHeight={134}>
      {itemData.map((item,key) => (
        
        <Paper key={item.img} sx={{alignItems:'center',display:'flex',height:'160px',textAlign:'center',alignContent:'center', justifyContent:'center'}} onClick={()=>handleClick(item.title,key)}>
        <ImageListItem key={item.img} className="vcenter" sx={{textAlign: 'center', alignContent: 'center'}}>
          <Tooltip arrow followCursor title={item.title}>
          <i className={[item.img,"lessonheroicon","vcenter"].join(' ')}></i>      
          </Tooltip>
        </ImageListItem>
        </Paper>
      ))}
    </ImageList>
    <br/>
    </center>
    
  );
}

//
// icons here: https://devicon.dev/
//
const itemData = [
  {
    img: 'devicon-react-original',
    title: 'ReactJS',
  },
  {
    img: 'devicon-javascript-plain',
    title: 'Javascript',
  },
  {
    img: 'devicon-postgresql-plain',
    title: 'SQL',
  },
  {
    img: 'devicon-html5-plain',
    title: 'HTML5',
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
    title: 'SASS',
  },
  {
    img: 'devicon-php-plain',
    title: 'PHP',
  },
  {
    img: 'devicon-nextjs-original',
    title: 'NextJS',
  },
  {
    img: 'devicon-swift-plain',
    title: 'Swift',
  },
];