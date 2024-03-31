import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Avatar } from "@mui/material";
import logo from "../../assets/logo.png";
import horusLogo from "../../assets/horusLogo.png"
import pdmLogo from "../../assets/PDM.png"
import { useState } from "react";
import './NavBar.css';

export default function ButtonAppBar() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [horusLogoSrc, setHorusLogoSrc] = useState(horusLogo);

  const handleAvatarClick = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      setTimeout(() => {
        setIsSpinning(false);
      }, 1000);
    }
  };
  
  const handleSecondAvatarHover = () => {
    setHorusLogoSrc(pdmLogo);
  };

  const handleSecondAvatarMouseLeave = () => {
    setHorusLogoSrc(horusLogo);
  };
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar position="static" sx={{ bgcolor: "black" }}>
        <Toolbar>
          <Avatar
            alt="Horus"
            src={logo}
            onClick={handleAvatarClick}
            sx={{ height: "70px", width: "70px", animation: isSpinning ? 'spin-animation 1s infinite linear' : 'none' }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ mr: 6, flexGrow: 1, fontFamily: '"Secular One", sans-serif', fontSize: "40px" }}
          >
            Eye Of Horus

          </Typography>
          <Avatar
            alt="Horus"
            src={horusLogoSrc}
            onMouseEnter={handleSecondAvatarHover}
            onMouseLeave={handleSecondAvatarMouseLeave}
            sx={{ height: "70px", width: "70px" }}
          />  
        </Toolbar>
      </AppBar>

    </Box>
  );
}