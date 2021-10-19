import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Skills() {
    return (
    <>
 <section id="skills" >
        <div className="container">
            <h1>
                My
                <span className="text-primary">Skills </span>
            </h1>
            <div className="boxes">
                <div className="box col-xs-12" data-aos="fade-left">
                    <h3>
                        <span className="text-primary"> Programming Languages </span>
                    </h3>
                    <div className="feature">
                        Python
                    </div>
                    <div className="feature">
                        JAVA
                    </div>
                    <div className="feature">
                        JAVASCRIPT
                    </div>
                    <div className="feature">
                        C
                    </div>
                    <div className="feature">
                        Node Js
                    </div>
                </div>
                <div className="box col-xs-12" data-aos="fade-right">
                    <h3>
                        <span className="text-primary"> Development Skills </span>
                    </h3>
                    <div className="feature">
                        Front-End Web Development
                    </div>
                    <div className="feature">
                        Data Science
                    </div>
                    <div className="feature">
                        Data Structure & Algo
                    </div>
                    <div className="feature">
                        IOT
                    </div>
                    
                </div>
            <div className="box col-xs-12" data-aos="fade-left">
                <h3>
                    <span className="text-primary"> Manegerial Skills </span>
                </h3>
                <div className="feature">
                    Time Mangement
                </div>
                <div className="feature">
                    Presentation Skills
                </div>
                <div className="feature">
                    Event Management 
                </div>
                <div className="feature">
                    Public Speaking
                </div>
                
            </div>
           </div>
        </div>
    </section>
    </>
    );
}

export default Skills;