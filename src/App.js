
import React ,{ useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar"
import Header from "./Header"
import About from "./About"
import Skills from "./Skills"
import Project from "./Project"
import Contact from "./Contact"
import Foot from "./Foot"
import Aos from "aos";
import  "aos/dist/aos.css";
function App() {
  useEffect(()=>
  {
    
    Aos.init(
      {
        offset : 150, 
        delay : 0,
         duration : 1000
      },[]);
  })
  return (
  <>
   <Navbar />
   <Header /> 
   <About />
   <Skills />
   <Project />
   <Contact /> 
   <Foot />
  
    </> 
  );
}

export default App;
