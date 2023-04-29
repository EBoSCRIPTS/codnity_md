import React from 'react';
import { styled } from '@mui/material/styles';
import Logo from '../assets/travelT.png'
import { Card, CardMedia, CardContent, Typography, Button, Link } from '@mui/material';

const CardStyle = styled(Card)({
  display: 'flex',
  borderRadius: '10px',
  width: '500px',
  height: 'auto',
  alignItems: 'center',
});

const CardMediaStyle = styled(CardMedia)({
  minWidth: 150,
  minHeight: 175,
  height: '100%',
  width: 'auto',
  objectFit: 'contain',
  marginRight: 16,
});

const CardButtonStyle = styled(Button)({
    height: 'auto',
    marginTop: '5%',
    marginBottom: '3%',
});



function BusinessCard() {
  return (
    <CardStyle sx={{backgroundColor: "white"}}>
      <CardMediaStyle image={Logo} sx={{backgroundColor: '#08071D'}} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          I made this up GmbH
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          Imaginary street 1, Vienna, Austria
        </Typography>  
        <Typography variant="body2" color="textSecondary" component="p">
          +43 1234567 89
        </Typography>
        <CardButtonStyle variant = 'outlined'><Link href="https://www.google.com/maps/dir//V%C4%ABne,+Austrija/@48.2207698,16.29766,12z/data=!4m18!1m8!3m7!1s0x476d079e5136ca9f:0xfdc2e58a51a25b46!2zVsSrbmUsIEF1c3RyaWph!3b1!8m2!3d48.2081743!4d16.3738189!16zL20vMGZocDk!4m8!1m0!1m5!1m1!1s0x476d079e5136ca9f:0xfdc2e58a51a25b46!2m2!1d16.3738189!2d48.2081743!3e3" 
        target="_blank" underline='none'>Take me there</Link> </CardButtonStyle>
      </CardContent>
    </CardStyle>
  );
}

export default BusinessCard;
