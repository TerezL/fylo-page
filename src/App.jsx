import React from "react";
import Navbar from "./components/navbar";
import Page from "./components/page";
import Icons from "./components/icons";
import Productive from "./components/productive";
import Testimonials from "./components/testimonials";
import Signup from "./components/signup";
import Footer from "./components/footer"

function App() {
  

  return (
    <>
      <Navbar />
      <Page />
      <Icons />
      <Productive />
      <Testimonials />
      <Signup />
      <Footer />
    </>
  )
}

export default App;
