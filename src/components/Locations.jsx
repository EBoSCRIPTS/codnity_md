import React from "react";
import '../App.css';

import CountryList from "./countryList";
import { Box, Typography } from "@mui/material";
function Info() {
  return (

      <Box sx={{display: 'flex', color:'white', alignItems: 'center', justifyContent: 'center'}}>
      <Box sx={{maxWidth: "100%",  width: '1080px', marginBottom: '3%' }}>
          <Typography  variant="h2" textAlign='center'>LOCATIONS</Typography>
         <CountryList/>  
      </Box>
      </Box>

    
  );
}

export default Info;