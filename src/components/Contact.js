// import React from 'react'
import "../CSS/Contact.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Loader from "./Loader.js";
function Contact() {
  const [Loading ,setloader]=useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setloader(true);
    emailjs.sendForm('service_4e0xjwi', 'template_gazymxs', form.current, 'GtQ0INZQ4haSB4B5U')
      .then((result) => {
          window.alert('form submitted');
          setloader(false);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
  

    <div class="container-2">
    <div class="form-container">
      <h2 className="con" >Contact us</h2>
      <form  ref={form} onSubmit={sendEmail}>
        <label for="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name"></input>

        <label for="email">Your E-mail</label>
        <input id="email" name="email" type="text" placeholder="Your email"></input>

        
        <label for="message">Your message</label>
        <textarea id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>

        <div class="text-right">
          {Loading ? "" :
          <button  className="bn" type="submit">Submit</button>
  }
        </div>
        <div className="aa">{Loading ? <Loader/>:null}</div>

      </form>
    </div>
  </div>

  )
}

export default Contact;