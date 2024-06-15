import React from "react";
import Logo from "./images/logo.svg";
import Grid from '@mui/material/Unstable_Grid2';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer(){
    return(
        <>
<section className="footer">
<img src={Logo} alt="logo" className="fotlogo" />
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }} className="Grid2">
<Grid xs={4} className="location">
<LocationOnIcon />
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
 do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
 </Grid>
 <Grid xs={2}>
    <p><PhoneInTalkIcon /> +1-154-123-4567</p>
    <p><EmailIcon /> example@fylo.com</p>
 </Grid>
 <Grid xs={1} md={2} className="about">
    <a href="#">About Us</a>
    <a href="#">Jobs</a>
    <a href="#">Press</a>
    <a href="#">Blog</a>
 </Grid>
 <Grid xs={1} className="contact">
    <a href="#">Contact Us</a>
    <a href="#">Terms</a>
    <a href="#">Privacy</a>
    
 </Grid>
 <Grid xs={1} md={2}>
 <a href="#" className="iconlink"><FacebookOutlinedIcon /></a>
 <a href="#" className="iconlink"><TwitterIcon /></a>
 <a href="#" className="iconlink"><InstagramIcon /></a>
 </Grid>
</Grid>
</section>
        </>
    )
}

export default Footer;