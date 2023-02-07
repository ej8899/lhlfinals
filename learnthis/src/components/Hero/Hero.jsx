//---------------------------------------------------------
// Import user filter
import { FilterContext } from "../../helpers/filter";
import { AuthContext } from "../../hooks/handleUsers.js";
//---------------------------------------------------------

import React, { useEffect, useRef, useState, useContext } from "react";

import { Container, Grid, Typography,Button } from "@mui/material";


import "../Application.scss";
import SpringModal from "../ItemDetail/index.jsx";
import ChipsArray, { ChipContext } from "./ChipsList";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Tab from "@mui/material/Tab";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

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
            disabled={props.disabled}
          />
  );
}

export default function Hero(props) {


  const [filled, setFilled] = React.useState(false);
  const [chipfilled, setChipFilled] = React.useState(false);
  const { filterData } = useContext(FilterContext);
  const { isAuth, user, userid, logout } = useContext(AuthContext);
  const {chipReset} = useContext(ChipContext)

  const handleClick = (index) => {
    zlog('info','rating chip:',index);

    if (index === 200 ) {
      setFilled(false)
      props.setClearFilter(true)
      filterData("clear", userid, props.setsampledata, props.sampledata, props.combinedData)
      chipReset(props.catList, setChipFilled)
    } else {
      setFilled({...filled, [index]: !filled[index]});
      // console.log({...filled, [index]: !filled[index]})
      filterData("complexity", {...filled, [index]: !filled[index]}, props.setsampledata, props.sampledata, props.combinedData)
      props.setClearFilter(false)
    }
  };


  const chipData = ["New", "Watch Later","Most Liked", "Rated 3+",];
  const chipDataComplexity = ["Beginner", "Intermediate", "Advanced", ];


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
            combinedData={props.combinedData} clearFilter={props.clearFilter} setClearFilter={props.setClearFilter} filled={chipfilled} setFilled={setChipFilled}
          ></ChipsArray>
          <Grid container spacing={3}>
        <Grid item xs={6} sx={{my: 1}}>
          <div>
          <Stack direction="row" spacing={2} sx={{alignItems: "flex-start", marginLeft : "3em"}}>
          {props.clearFilter &&
          <Chip
            color="primary"
            label="Clear Filters"
            icon={<FilterAltOffIcon />}
            variant="default"
            sx={{ textTransform: "none",
                  fontWeight: "normal",
                  borderRadius: "5px"
                }}
            disabled
          />}
          {!props.clearFilter &&
            <Chip
              color="primary"
              label="Clear Filters"
              icon={<FilterAltOffIcon />}
              variant="default"
              sx={{ textTransform: "none",
                    fontWeight: "normal",
                    borderRadius: "5px"
                  }}
              onClick={()=> {handleClick(200)}}
            />}
          {chipData.map((chip, index) => (
            (chip === "Watch Later" && !userid) ?
            (<div key={index}><DoDivider type={chip} key={index} label={chip} variant="outlined" disabled={true}
            ></DoDivider>
            </div>
            ) : (        
            <div key={index}><DoDivider type={chip} key={index} label={chip} color="success" variant={filled[index] ? "default" : "outlined"}
            onClick={()=> {handleClick(index)}}
            ></DoDivider>
            </div>)
          ))}
          </Stack>
          </div>
        </Grid>
        <Grid item xs={6} sx={{my: 1}}>
          <div >
          <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{alignItems: "flex-end", marginRight : "3em"}}>
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

