import React from "react";
import PicProd from "./images/illustration-stay-productive.png";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function Productive(){
    return(
        <>
        <section className="prod-sec">
        <div class="container">
  <div class="row">
    <div class="col-6">
            <img src={PicProd} alt="picprod" className="prodpic"/>
            </div>
            <div class="col my-auto">
            <section className="prod-head">
            <h2>Stay productive, wherever you are</h2>
            </section>
            <section className="prod-txt">
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            <a href="#">See how Fylo works <ArrowCircleRightIcon /></a>
            </section>
            </div>
            </div>
            </div>
            </section>
        </>
    )
}

export default Productive;