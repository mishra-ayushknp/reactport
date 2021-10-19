import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
function Contact() {
    return (
    <>
     <section id="contact">
    	<h1 className = "h-primary center ">Feedback</h1>
    	<div id ="contact-box">
    		<form  onsubmit="post()" action="https://formspree.io/mqkwqenk" method="POST">
    			

    			<div className = "form-group">
    				<label for="name">Name : </label>
    				<input type = "text" name ="name" id = "name" placeholder ="Enter your name" />
    			</div>
    			<div className ="form-group">
    				<label for = "email">Email : </label>
    				<input type = "_replyto" name = "name" id = "email" placeholder = "Enter your email" />
    			</div>
    			<div className ="form-group">
    				<label for = "phone">Phone Number : </label>
    				<input type = "phone"  name = "name" id="phone" placeholder = "Enter your phone number" />
    			</div>
    			<div className = "form-group">
    				<label for ="message">Message : </label>
    				<textarea name ="mesaage" id = "message" cols = "30" rows = "10"></textarea>

    			</div>
    			<div><button type="submit" className ="btn">SUBMIT YOUR RESPONSE</button></div>
    		</form>
    	</div>
    </section>

    </>
    );
}

export default Contact;