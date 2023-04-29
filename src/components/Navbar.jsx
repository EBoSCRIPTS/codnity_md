import React from "react";
import { Toolbar, Typography, useMediaQuery, IconButton, Menu, MenuItem } from "@mui/material";
import { styled } from '@mui/material/styles'
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/travelLogo.png'

const NavigBar = styled(Toolbar)({
  backgroundColor: '#0A0619',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& div': {
    display: 'flex',
  },
});

const ImageStyle = styled('img')({
    height: 'auto',
    width: 'auto',
    maxWidth: '100%',
    borderRadius: '10px',
  });

const NavigTypo = styled(Typography)({
  display: 'inline-block',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    transform: 'scaleX(0)',
    height: '2px',
    bottom: 0,
    left: 0,
    backgroundColor: '#0087ca',
    transformOrigin: 'bottom right',
    transition: 'transform 0.15s ease-out',
    textDecoration: 'none',
  },
  '&:hover::after': {
    transform: 'scaleX(1)',
    transformOrigin: 'bottom left' ,
  },

  paddingRight: '20px',
  justifyContent: 'space-between',
  color: "white",
  textDecoration: 'none'

});

function Navbar() {
  const isMobile = useMediaQuery('(max-width:660px)');

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isMobile) {
    return (
      <NavigBar>
        <img src={Logo} alt="LOGO"/>
        <div>
          <IconButton size="large" aria-label="menu" aria-controls="menu" areia-haspopup="true" onClick={handleClick}>
            <MenuIcon color="primary" />
          </IconButton>
          <Menu id="menu" anchorEl={anchorEl} keepMounted open={open}onClose={handleClose}>
            <MenuItem onClick={handleClose}>
              <NavLink to="/" sx={{textDecoration: 'none', color: 'inherit' }}>
                HOME</NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink to="/info" sx={{textDecoration: 'none', color: 'inherit' }}>
                LOCATIONS</NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink to="/contact" sx={{textDecoration: 'none', color: 'inherit' }}>
                CONTACTS
              </NavLink>
            </MenuItem>
          </Menu>
        </div>
      </NavigBar>
    );
  } else {
    return (
      <NavigBar>
        <ImageStyle src={Logo} alt="LOGO"/>
        <div>
          <NavLink to="/" sx={{textDecoration: 'none' }}>
            <NavigTypo variant="h5">HOME</NavigTypo>
          </NavLink>
          <NavLink to="/info" sx={{textDecoration: 'none' }}>
            <NavigTypo variant="h5">LOCATIONS</NavigTypo>
          </NavLink>
          <NavLink to="/contact" sx={{textDecoration: 'none' }}>
            <NavigTypo variant="h5">CONTACTS</NavigTypo>
          </NavLink>
        </div>
      </NavigBar>
    );
  }
}

export default Navbar;
