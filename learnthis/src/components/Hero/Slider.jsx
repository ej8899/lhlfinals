import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Divider } from "@mui/material";

import "./slider.scss";

// https://github.com/akiran/react-slick

export default function Heroslider() {

  const StyledPaper = styled('Box')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    
    border-radius: 5px;
    text-align: left;
    
    background: ${theme.palette.mode === 'dark' ? 'blue' : 'red'};
    border: 0.3px solid ${theme.palette.mode === 'dark' ? '#ce93d8' : '#6a1b9a'};
    color: ${theme.palette.mode === 'dark' ? '#ce93d8' : '#6a1b9a'};
    `,
  );

  const slider = useRef(null);

  const play = () => {
    slider.current.slickPlay();
  };


  let settings = {
    dots: false,
    arrows: true,
    
    slidesToShow: 4.1,
    slidesToScroll: 1,
    centerPadding: '10px',
    centerMode: true,

    speed: 800,
    autoplaySpeed: 7500,
    autoplay: true,
  };

  useEffect(() => {
    play();
  }, []);

  const coloredby = localStorage.getItem("isDarkMode") === "dark" ? "" : "#fbfbfb";

  return (
    <center>
    
    <Box width='1400px' >
      
    <Typography variant="h5" align="left">
      Check out today's featured resources...
    </Typography>
    </Box>

    <Paper sx={{width:1400, p:1}} style={{backgroundColor: coloredby}}>
    <Box  display="flex" justifyContent="center" alignItems="center">
    <Grid container spacing={2}>
  
    <Grid item xs={12}>
    <Slider ref={slider} {...settings}>
      <div>
        <h3><div className="slideritem" style={{backgroundImage: `url('http://img.youtube.com/vi/jl29qI62XPg/mqdefault.jpg')`, width: "320px", height: "180px", borderRadius: 10, }}></div></h3>
      </div>
      <div>
        <h3><div className="slideritem" style={{backgroundImage: `url('http://img.youtube.com/vi/_n8x8MhQo1k/mqdefault.jpg')`, width: "320px", height: "180px", borderRadius: 10, }}></div></h3>
      </div>
      <div>
        <h3><div className="slideritem" style={{backgroundImage: `url('http://img.youtube.com/vi/Mus_vwhTCq0/mqdefault.jpg')`, width: "320px", height: "180px", borderRadius: 10, }}></div></h3>
      </div>
      <div>
        <h3><div className="slideritem" style={{backgroundImage: `url('http://img.youtube.com/vi/NXpeXn0SKPU/mqdefault.jpg')`, width: "320px", height: "180px", borderRadius: 10, }}></div></h3>
      </div>
      <div>
        <h3><div className="slideritem" style={{backgroundImage: `url('http://img.youtube.com/vi/QU1pPzEGrqw/mqdefault.jpg')`, width: "320px", height: "180px", borderRadius: 10, }}></div></h3>
      </div>
      <div>
        <h3><div className="slideritem" style={{backgroundImage: `url('http://img.youtube.com/vi/tOiQmwSjcYA/mqdefault.jpg')`, width: "320px", height: "180px", borderRadius: 10, }}></div></h3>
      </div>
    </Slider>
    </Grid>
  
    </Grid>
    </Box>
    </Paper>
    <br/>
    </center>
  );
}