import React, { useEffect, useRef, useState, useContext } from "react";
import YouTube from 'react-youtube'; // npx install react-youtube 
import axios from "axios"; // npx install axios

import './Previews.css';
import zlog from "../../zlog";
import config from "../../config";

// todo - any benefit to removing react-youtube and rolling our own variant?

function PreviewItem(props) {
  const API_KEY = "AIzaSyBjbEQ1qaIn7iZi-JBMBlhJRuqw_yMFNxI";
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

  // state for video data
  const [title, setTitle] = useState('');
  useEffect(() => {
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`)
      .then(response => {
        setTitle(response.data.items[0].snippet.title);
        if(global.config.debug === true) {
          //zlog('info',"data snippet follows:");
          //console.log(response.data.items[0].snippet)
        }
        /*
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

  return (
    <div className="previewItemWrapper">
    this is a preview item block
    <YouTube videoId={testVideoID} opts={videoPlayerOpts} />
    <h2>{title}</h2>
    </div>
  );
};
export default PreviewItem;