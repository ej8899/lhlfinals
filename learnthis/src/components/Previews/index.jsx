import React, { useEffect, useRef, useState, useContext } from "react";
import YouTube from 'react-youtube'; // npx install react-youtube 
import axios from "axios"; // npx install axios

import './Previews.css';
import zlog from "../../zlog";


// todo - any benefit to removing react-youtube and rolling our own variant?

function PreviewItem(props) {
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

  // state for video data
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  useEffect(() => {
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`)
      .then(response => {
        setTitle(response.data.items[0].snippet.title);
        setThumbnail(response.data.items[0].snippet.thumbnails.standard.url);
        if(global.config.debug === true) {
          //zlog('info',"data snippet follows:");
          //console.log(response.data.items[0].snippet);
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


  // todo just display thumbnail here, a click should open to a modal w the youtube player embed

/*
    <div className="previewItemWrapper">
    <h3>{title}</h3>
    <img src={thumbnail} alt=""></img>
    <YouTube videoId={testVideoID} opts={videoPlayerOpts} />
    </div>
*/

  return (



    <div class="container">

        <div class="card">
          <img src={thumbnail} alt="" className="card_img"></img>

            <div class="card_body">
                <h2 class="card_name">{title}</h2>
                <span class="card_occupation">description</span>
                <ul class="social_list">
                    <li class="social_item"> <a href="#" class="social_link" ><i class='bx bxl-github' ></i></a> </li>
                    <li class="social_item"> <a href="#" class="social_link" ><i class='bx bxl-twitter' ></i></a> </li>
                    <li class="social_item"> <a href="#" class="social_link" ><i class='bx bxl-linkedin-square' ></i></a> </li>
                </ul>
                <a href="#" class="card_button"><i class='bx bx-envelope' ></i>add to lesson plan</a>
            </div>

            <div class="card_footer">
                <div class="card_data">
                    <h3 class="card_data_title">Projects</h3>
                <span class="card_data_number">50+</span>
                </div>

                <div class="card_data">
                    <h3 class="card_data_title">Followers</h3>
                <span class="card_data_number">5.5k</span>
                </div>

                <div class="card_data">
                    <h3 class="card_data_title">Following</h3>
                <span class="card_data_number">54</span>
                </div>
            </div>

      </div>

    </div>



  );
};
export default PreviewItem;