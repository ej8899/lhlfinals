import { Container, Grid, Typography,Button } from "@mui/material";

import "../Application.scss";
import SpringModal from "../ItemDetail/index.jsx";
import ChipsArray from "./ChipsList";


const heroContainer = {
    paddingTop: "64px",
    border: "1px solid red"
  };
const heroContent =  {
    textAlign: "center",
    padding: "32px",
    border: "1px solid red"
  };



export default function Hero(props) {
  function showAbout() {
    // TODO - this is in Application.js currently - needs moved to helper function file for import elsewhere
  }
  
  return (

    <Container maxWidth="xl" style={heroContainer}>
    <Grid container>
      <Grid item xs={12}>
        <div style={heroContent}>
          <Typography variant="h1">Welcome to our site!</Typography>
          <Typography variant="subtitle1">
          hero location: <br/><br/> put other 'chips' or buttons here for quick sort of primary categories
          </Typography>
          <ChipsArray></ChipsArray>
        </div>
      </Grid>
    </Grid>
    </Container>

  );
};

