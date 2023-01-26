import React, { useEffect, useRef, useState, useContext } from "react";
import YouTube from 'react-youtube'; // npx install react-youtube 
import axios from "axios"; // npx install axios

import './Previews.css';
import zlog from "../../zlog";

// materialUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

// helpers
import { truncateText } from '../helpers';

// TODO - any benefit to removing react-youtube and rolling our own variant?

function PreviewItem(props) {
  console.log("preview item props:",props)
  const API_KEY = global.config.youtubekey;
  
  zlog('info',API_KEY)
  const testVideoID = "hY7m5jjJ9mM";
  
  const videoId = testVideoID;
  
  // reference: https://www.npmjs.com/package/react-youtube
  const videoPlayerOpts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };



  // TODO - implement materialui skeleton

  // state for video data
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [description, setDesc] = useState('');


  useEffect(() => {
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${props.videoId.item}&key=${API_KEY}`)
      .then(response => {
        let title = response.data.items[0].snippet.title;
        if (title) setTitle(truncateText(title,30));

        // TODO - truncate description
        let description = response.data.items[0].snippet.description;
        if (description) setDesc(truncateText(description,100));

        setThumbnail(response.data.items[0].snippet.thumbnails.standard.url);
        if(global.config.debug === true) {
          //zlog('info',"data snippet follows:");
          //console.log(response.data.items[0].snippet);
        }
        /*
        REFERENCE:
        useful items in response data:
        .snippet.
          categoryId
          channelId,
          channelTitle,
          description,
          title,
          thumbnails.default.url, 120x90
          thumbnails.high.url, 480x360
          thumbnails.medium.url, 320x180
          thumbnails.standard.url, 640x480
        */
      })
      .catch(error => {
        console.error(error);
      });
  }, [videoId]);


  // TODO  just display thumbnail here, a click should open to a modal w the youtube player embed
  // TODO - truncate descriptoin to 'x' chars
/*
    <div className="previewItemWrapper">
    <h3>{title}</h3>
    <img src={thumbnail} alt=""></img>
    <YouTube videoId={testVideoID} opts={videoPlayerOpts} />
    </div>
*/

  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={thumbnail}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Add to Lesson Plan
        </Button>
      </CardActions>
    </Card>
    
  );
};
export default PreviewItem;