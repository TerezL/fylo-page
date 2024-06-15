import React from "react";
import Intro from "./images/illustration-intro.png"

function Page(){
    return(
        <>
        <section className="intro-sec">
        <section className="container-intro">
            <img src={Intro} alt="intro-pic" className="intro-pic" />
            
            <h1 className="intro-header">All your files in one secure location,
            accessible anywhere.</h1>
            <p className="intro-txt">Fylo stores all your most important files in one secure location.<br /> Access the whenever you need, share and collaborate with <br /> friends family , and co-workers.</p>
            <button type="button" class="btn btn-lg" className="startbutton">Get Started</button>
            </section>
            </section>
        </>
    )
}

export default Page;