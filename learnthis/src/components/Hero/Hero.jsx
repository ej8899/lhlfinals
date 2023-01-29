import * as React from 'react';
import { Container, Grid, Typography,Button } from "@mui/material";

import "../Application.scss";
import SpringModal from "../ItemDetail/index.jsx";
import ChipsArray from "./ChipsList";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

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




export default function Hero(props) {
  const [filled, setFilled] = React.useState(false);
  const handleClick = (index) => {
    zlog('info','rating chip:',index);
    setFilled({...filled, [index]: !filled[index]});
  };


  const chipData = ["Beginner", "Intermediate", "Advanced", "Rated 3+"];

  return (

    <Container maxWidth="xl" style={heroContainer}>
    <Grid container>
      <Grid item xs={12}>
        <div style={heroContent}>
          <Typography variant="h2">Welcome to our site!</Typography>
          <Typography variant="subtitle1">
          hero component<br/><br/> put other 'chips' or buttons here for quick sort of primary categories
          </Typography>
          <ChipsArray></ChipsArray>
          <Stack direction="row" spacing={1}>
          {chipData.map((chip, index) => (
          <Chip
            key={index}
            label={chip}
            color="success"
            variant={filled[index] ? "default" : "outlined"}
            onClick={()=> {handleClick(index)}}
          />
          ))}
          </Stack>
        </div>
      </Grid>
    </Grid>
    </Container>

  );
};

