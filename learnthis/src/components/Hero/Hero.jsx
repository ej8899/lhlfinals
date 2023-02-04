import * as React from 'react';
import { Container, Grid, Typography,Button } from "@mui/material";

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
  const [filled, setFilled] = React.useState(false);
  const handleClick = (index) => {
    zlog('info','rating chip:',index);
    setFilled({...filled, [index]: !filled[index]});
  };


  const chipData = ["New", "Favorites", "Watch Later","Rated 3+","spacer","Beginner", "Intermediate", "Advanced",  ];

  return (

    <Container maxWidth="xl" style={heroContainer}>
    <Grid container>
      <Grid item xs={12}>
        <div style={heroContent}>
          <Typography variant="h2">Welcome to our site!</Typography>
          <Typography variant="subtitle1">
          hero component<br/><br/> put other 'chips' or buttons here for quick sort of primary categories
          </Typography>
          <ChipsArray catList={props.catList}></ChipsArray>
          <Stack direction="row" spacing={1} sx={{alignItems: "flex-end"}}>
          {chipData.map((chip, index) => (
            <div><DoDivider type={chip} key={index} label={chip} color="success" variant={filled[index] ? "default" : "outlined"}
            onClick={()=> {handleClick(index)}}
            ></DoDivider>
            </div>
          ))}
          </Stack>
        </div>
      </Grid>
    </Grid>
    </Container>

  );
};

