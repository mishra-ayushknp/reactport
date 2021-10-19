import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
    return (
    <>
<header class="home" id="home">
			

			<div class="container">
		<div>
			<h1>I'm Ayush Mishra.</h1>
			
		<h2>	I'm <span class ="change_content"></span> </h2>
		</div>
		<div class = "row">
		<a href ="https://www.facebook.com/profile.php?id=100014800440196"><i class="fa fa-facebook-square" class ="fac" ></i></a>
		<a href="https://linkedin.com/in/ayush-mishra-9ab220195">	<i class="fa fa-linkedin" class ="link" ></i></a>
		<a href= "https://instagram.com/ayushmishra4768//">	<i class="fa fa-instagram" class = "inst"></i></a>
		<a href = "https://github.com/mishra-ayushknp">	<i class="fa fa-github" class = "git" ></i></a>
		</div>
			</div>
		
	</header>
    </>
    );
}

export default Header;