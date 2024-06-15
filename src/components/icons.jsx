import React from "react";
import Access from "./images/icon-access-anywhere.svg";
import Security from "./images/icon-security.svg";
import Collaboration from "./images/icon-collaboration.svg";
import Store from "./images/icon-any-file.svg";
import Grid from '@mui/material/Unstable_Grid2';

function Icons() {
    return(
        <>
        <section className="icons-sec" >
        <Grid container rowSpacing={{xs: 2, md: 5}} columnSpacing={{ xs: 2, md: 5}} columns={{ xs: 2, md: 12 }}>
        <Grid xs={2} md={6}>
            <img src={Access} alt="access-icon" className="icons"/>
            <section className="col">
            <h3>Access your files, anywhere</h3>
            <p>The ability to use a smartphone, tablet, or computer to access to account means your files follow you everywhere</p>
            </section>
            </Grid>
            <Grid xs={2} md={6}>
            <img src={Security} alt="security-icon" className="icons"/>
            <section className="col">
            <h3>Security you can trust</h3>
            <p>2-factor authentication and user-controlled encryption are just a coupleof the security features we allow to help secure your files.</p>
            </section>
            </Grid> 
            <Grid xs={2} md={6}>
            <img src={Collaboration} alt="colab-icon" className="icons"/>
            <section className="col">
            <h3>Real-time collaboration</h3>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email arrachments required.</p>
            </section>
            </Grid> 
            <Grid xs={2} md={6}>
            <img src={Store} alt="store-icon" className="icons"/>
            <section className="col">
            <h3>Store any type of file</h3>
            <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
            </section>
            </Grid> 
            </Grid>
        </section>
        </>
    )
}

export default Icons;