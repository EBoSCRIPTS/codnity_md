import React from "react";
import FormContact from "./FormForContact"
import BusinessCard from "./businessCard"
import '../App.css';
import { Typography } from "@mui/material";
import {Box} from "@mui/material";


function Contact() {
  return (


    <Box sx={{display: 'flex', color:'white', alignItems: 'center', justifyContent: 'center', paddingTop: '1%', marginLeft: '2%', marginRight: '2%'}}>
    <Box sx={{maxWidth: '100%', width: '1080px'}}>
            <Typography variant="h2" textAlign={'center'}> Got any questions?</Typography>
            <Typography variant="p">
            <br/>
            Use the form below if you've got any questions. Have something urgent? Other details down below!
            </Typography>
            <FormContact/>
            <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '3%', marginBottom: '10%' }}>
              <BusinessCard/>
            </Box>
        </Box>
        
      </Box>


  );
}

export default Contact;