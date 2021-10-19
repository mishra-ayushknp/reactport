
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
function Navbar() {
  return (
  <>
   
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
			<div className ="container">
			<a href="index.html" class="navbar-brand">PORTFOLIO</a>
			<button className="navbar-toggler" data-toggle ="collapse" data-target="#navbaraid"> 
				<span className ="navbar-toggler-icon">	
				</span>
			</button>
			<div className="collapse navbar-collapse" id = "navbaraid">
		<ul className="navbar-nav text-center ml-auto">
				<li className="nav-item"><a href = "#home"  className="nav-link">Home</a></li>
				<li className="nav-item" ><a href = "#about"  className="nav-link">About me</a></li>
				<li className="nav-item"  ><a href = "#skills"  className="nav-link">Skills</a></li>
				<li  className="nav-item" ><a href = "#project"  className="nav-link">Project</a></li>
				<li  className="nav-item"  ><a href = "#contact"  className="nav-link">Contact me</a></li>
				
			</ul>
		</div>
		</div>
		</nav>
  </> 
  );
}

export default Navbar;