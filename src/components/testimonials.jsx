import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Quotes from "./images/bg-quotes.png";
import Prof1 from "./images/profile-1.jpg";
import Prof2 from "./images/profile-2.jpg";
import Prof3 from "./images/profile-3.jpg";



function Testimonials(){
    return(
        <>
        <section className="testimons">
        <img src={Quotes} alt="marks" className="marks"/>
<Grid container spacing={4} columns={{ xs: 2, md: 12 }} alignItems="center"
  justifyContent="center">
  
        <Grid xs={2} md={4}>
        <section  className="Grid">
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
        
        <section className="testname">
        <img src={Prof1} alt="prof1" className="profpic"/>
        <section className="testtext">  
        <p className="nam">Satish Patel</p>
        <p className="title">Founder & CEO, Huddle</p>
        </section>
        </section>
        </section>
        </Grid>
        <Grid xs={2} md={4}>
        <section  className="Grid">
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            <section className="testname">
            <img src={Prof2} alt="prof2" className="profpic"/>
            <section className="testtext">  
        <p className="nam">Bruce McKenzie</p>
        <p className="title">Founder & CEO, Huddle</p>
        </section>
            </section>
            </section>
        </Grid>
        <Grid xs={2} md={4}>
        <section  className="Grid"> 
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            <section className="testname">
            <img src={Prof3} alt="prof3" className="profpic"/>
            <section className="testtext">  
        <p className="nam">Iva Boyd</p>
        <p className="title">Founder & CEO, Huddle</p>
        </section>
            </section>
            </section>
        </Grid>
        
        </Grid>
        </section>
        </>
    )
}

export default Testimonials;