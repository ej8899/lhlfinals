//---------------------------------------------------------
// Import user authentication
import { FilterContext } from "../../helpers/filter";
//---------------------------------------------------------

import React, { useEffect, useRef, useState, useContext } from "react";

import { Container, Grid, Typography,Button } from "@mui/material";

//---------------------------------------------------------
// Import user authentication
import { AuthContext } from "../../hooks/handleUsers";
//---------------------------------------------------------

import "../Application.scss";
import SpringModal from "../ItemDetail/index.jsx";
import ChipsArray from "./ChipsList";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import zlog from "../../helpers/zlog.js";

const heroContainer = {
    paddingTop: "4px",
    border: "0px solid red"
  };
const heroContent =  {
    textAlign: "center",
    padding: "12px",
    border: "0px solid red"
  };

//   <Chip
//   key={index}
//   label={chip}
//   color="success"
//   variant={filled[index] ? "default" : "outlined"}
//   onClick={()=> {handleClick(index)}}
//   sx={{ textTransform: "none",
//           fontWeight: "normal",
//           borderRadius: "5px"
//       }}
// />

function DoDivider(props) {
  if(props.type === 'spacer') {
  return (
    <span>complexity:</span>
  );
  }
  else return ( 
    <Chip
            key={props.index}
            label={props.type}
            color="success"
            variant={props.variant}
            onClick={props.onClick}
            sx={{ textTransform: "none",
                    fontWeight: "normal",
                    borderRadius: "5px",
                    
                }}
          />
  );
}

export default function Hero(props) {

  const { isAuth, user, userid, logout } = useContext(AuthContext);

  const [filled, setFilled] = React.useState(false);
  const { filterData } = useContext(FilterContext);

  const handleClick = (index) => {
    zlog('info','rating chip:',index);
    setFilled({...filled, [index]: !filled[index]});

    console.log({...filled, [index]: !filled[index]})
    filterData("complexity", {...filled, [index]: !filled[index]}, props.setsampledata, props.sampledata, props.combinedData, userid)
  };


  const chipData = ["New", "Favorites", "Watch Later","Rated 3+",];
  const chipDataComplexity = ["Beginner", "Intermediate", "Advanced",  ];

  return (

    <Container maxWidth="xl" style={heroContainer}>
    <Grid container>
      <Grid item xs={12}>
        <div style={heroContent}>
          <Typography variant="h2">Welcome to our site!</Typography>
          <Typography variant="subtitle1">
          hero component<br/>
          </Typography>
          <ChipsArray catList={props.catList}
            setsampledata={props.setsampledata} sampledata={props.sampledata}
            combinedData={props.combinedData}
          ></ChipsArray>
          <Grid container spacing={3}>
        <Grid item xs={6} sx={{my: 1}}>
          <div >
          <Stack direction="row" spacing={2} sx={{alignItems: "flex-start"}}>
          {chipData.map((chip, index) => (
            <div key={index}><DoDivider type={chip} key={index} label={chip} color="success" variant={filled[index] ? "default" : "outlined"}
            onClick={()=> {handleClick(index)}}
            ></DoDivider>
            </div>
          ))}
          </Stack>
          </div>
        </Grid>
        <Grid item xs={6} sx={{my: 1}}>
          <div >
          <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{alignItems: "flex-end"}}>
          {chipDataComplexity.map((chip, index) => (
            <div key={index+10}><DoDivider type={chip} key={index+10} label={chip} color="success" variant={filled[index+10] ? "default" : "outlined"}
            onClick={()=> {handleClick(index+10)}}
            ></DoDivider>
            </div>
          ))}
          </Stack>
          </div>
        </Grid>
      </Grid>
          
        </div>
      </Grid>
    </Grid>
    </Container>

  );
};

