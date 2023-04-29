import React from 'react'
import Video from '../components/homeVideo.mp4'
import { useMediaQuery} from "@mui/material";
import HomeImage from '../components/homemountains.jpg'
import styled from '@emotion/styled'


const VideoTheme = styled('video')({
    borderRadius: '10px',
    marginLeft: '10%',
    width: '100%',
    height: 'auto',
    
});

const ImageTheme = styled('img')({
    position: 'relative',
    objectFit: 'contain',
    marginTop: '3%',
    width: '100%',
    height: 'auto',
});

function HomeVideo(){
    const isMobile = useMediaQuery('(max-width:599px)');

    if (isMobile){
        return(
        <ImageTheme src={HomeImage}></ImageTheme>
        )
    }
    else{
    return(
         
        <VideoTheme src={Video} autoPlay loop muted playsInline/>
    )
    }
}
export default HomeVideo
