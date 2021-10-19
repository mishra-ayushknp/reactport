import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import b3 from "./b3.jpg";
function About() {
    return (
    <>
<section  id = "about">
		
        <h1> About <span className ="me" style={{color : "red"}}>Me</span> </h1>
        <div className ="container-sss " >
            <div className = "rowimg" data-aos="fade-left" >

                <img src={b3} />
            </div>
            <div className = "rowabout " data-aos="fade-right" >
                <p> I am<span> Ayush Mishra</span> currently pursuing  my Bachelor's degree in <span> Electronics and Communication Engineering</span> from Madan Mohan Malaviya University of Technology,Gorakhpur.I am web developer and Data Scientist having good command in HTML , CSS , Javascript , NodeJs ,Express and MongoDb   </p>
          </div>
      </div>
  </section>
    </>
    );
}

export default About;