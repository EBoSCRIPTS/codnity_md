import React from "react";
import '../App.css';
import {VideoComp} from "../components"
import { Grid, Typography } from "@mui/material";


function Home() {
  return (
    <Grid container justify="center" alignItems="center" direction="column" color="white" sx={{marginLeft: '0%', paddingTop: '1%', flexWrap: 'wrap'}}>
      <Typography variant="h2">WELCOME</Typography>
      <Grid container justify="center" alignItems="center"  paddingRight={'5%'} paddingTop={'3%'}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" sx={{marginLeft: '7%', textAlign: "center", border: "2px solid rgba(10, 6, 25, 0.8)", 
          borderRadius: "10px",  backgroundColor: "rgba(10, 6, 25, 0.6)"}}>
            Embark on a breathtaking journey and explore the majestic Alps. 
            From snow-capped peaks to lush valleys, 
            the Alps offer a world of natural wonders waiting to be discovered. 
            Whether you're seeking adventure or relaxation, the Alps have something for everyone. 
            Get ready to be amazed by the stunning landscapes and experience the beauty of nature like never before.
          </Typography>

        </Grid>
        <Grid item xs={12} sm={6} paddingBottom={'5%'} alignItems={'center'} paddingLeft={'5%'} display={'flex'} paddingTop={'1%'}>
          <VideoComp/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
