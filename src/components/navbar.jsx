import React from "react";
import Logo from "./images/logo.svg";


function Navbar(){

    return (
<>
<section className="container">
<nav className="navbar navbar-expand ">
  <section className="container-fluid">
  <a class="navbar-brand" href="#"><img src={Logo} /></a>
    
      <section className="navbar-nav ">
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Team</a>
        <a className="nav-link" href="#">Sign In</a>
      </section>
    </section>
  
</nav>
   </section> 
   </>
    )
}   

export default Navbar;