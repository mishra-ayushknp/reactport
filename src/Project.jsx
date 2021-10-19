import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
function Project() {
    return (
    <>
    <section className ="project bg-dark"  id = "project">
	<div className ="container">
	<h2 style ={{padding : "20px"}}>My<span className ="spa"> Projects</span> </h2>

<div className ="proj">
<div  className = "rowj" data-aos ="fade-left">
	<h1> Digit Recognition
	</h1>
	<p> Developed using Machine Learning Algorithm (Support Vector Machine) to recognze the digit </p>
</div>
<div className = "rowj" data-aos ="fade-right">
	<h1>H1b Visa Data Analysis </h1>
	<p>Data Analysis on H1b visa data using python library numpy ,pandas and matplotlib.</p>
</div>
<div className = "rowj" data-aos="fade-right">
	<h1> Indian Cultural Website</h1>
	<p> Develope a website on Indian Culture & History</p>
	</div>
	<div className="rowj" data-aos ="fade-left">
		<h1>Calculator</h1>
		<p>Design a calculator using java applet and java swing</p>
	</div>
</div>
</div>
</section>
    </>
    );
}

export default Project;