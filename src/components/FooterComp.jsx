import React from "react";
import { BottomNavigation } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const AppBottomNav = styled(BottomNavigation)({

    display: 'flex',
    backgroundColor: '#0A0619',
    justifyContent: 'space-between',
    position: 'fixed',
    bottom: 0,
    width: '100%',
});

const AppLink = styled(Link)({
    marginTop: '15px',
    paddingBottom: 0,
    textAlign: 'center',
    width: '33.33%',
});

function FooterComp(){
    
    return(
        <AppBottomNav>
            <AppLink href="http://www.facebook.com" target="_blank" sx={{borderRight: '2px solid white'}}>
                <FacebookIcon></FacebookIcon>
            </AppLink>
            <AppLink href="http://www.instagram.com" target="_blank">
                <InstagramIcon></InstagramIcon>
            </AppLink>
            <AppLink href="http://www.twitter.com" target="_blank" sx={{borderLeft: '2px solid white'}}>
                <TwitterIcon></TwitterIcon>
            </AppLink>
        </AppBottomNav>
    )
}

export default FooterComp;
