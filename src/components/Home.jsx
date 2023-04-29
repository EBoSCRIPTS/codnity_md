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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
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
