import React from "react";
import "../CSS/Aboutus.css";
import pic from "../Images/myimg.jpg";

function Aboutus() {
  return (
    <div className="about">
      <section class="about-section">
        <h1>About</h1>
        <div className="myimg">
          <img src={pic} />
        </div>
        <div className="abt"> 
        <p>
          My name is Abhishek, I'm a front-end developer based in
          manglore,India. I have developed many types of front-ends from well
          know D3 applications to Ecommerce booking platforms. I'm passionate
          about
        </p></div>
      </section>
     
    </div>
  );
}

export default Aboutus;
