import React, { useEffect, useState } from "react";
import "../CSS/Navbar.css";
import hamburger1 from "../Images/hamburger.png";
import { Link, useLocation } from "react-router-dom";


function Navbar() {
  const [mobileNavBar, setMobileNavBar] = useState(false);
  const [activeNav,setActiveNav]=useState(true);
  const location=useLocation();
  useEffect(()=>{
    setActiveNav(location.pathname);
    // console.log(location);
  },[location]);

  const hamburger = (value) => {
    setMobileNavBar(value);
  };
  return (
    <div className="topnavigation" id="myTopnav">
      <div className="desk">
      <ul>
       {
        activeNav=="/"? 
        ""
        :
        <Link className="home"  to={'/'}>Home</Link>
        }
        {
        activeNav=="/Aboutus"? 
        ""
        :
        <Link className="#aboutus" to={'/Aboutus'}>About</Link>}
         {
        activeNav=="/Skills"? 
        ""
        :
        <Link className="#skills" to={'/Skills'}>Skills</Link>}
         {
        activeNav=="/Contact"? 
        ""
        :
        <Link className="#contact" to={'/Contact'}>Contact</Link>}
         {
        activeNav=="/Quali"? 
        ""
        :
        <Link className="#quali" to={'/Quali'}>Qualification</Link>}
        </ul></div>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
  {!mobileNavBar ?
        <span className="ico">
          <img src={hamburger1} onClick={() => hamburger(true)} alt="hrdr" />
        </span>
       : 
       ""
       }
       

      {mobileNavBar ? (
        <div id="mySidebar" className="sidebar">
           <span className="closebtn" onClick={() => hamburger(false)}>
            &times;
          </span>
          <li>
          {
        activeNav=="/"? 
        ""
        :
            <Link className="home" to={'/'} onClick={() => hamburger(false)}>Home</Link>}
          </li>
          
          <li>
          {
        activeNav=="/Aboutus"? 
        ""
        :
          <Link className="#aboutus" to={'/Aboutus'} onClick={() => hamburger(false)}>About</Link>}
          </li>
          <li>
          {
        activeNav=="/Skills"? 
        ""
        :
          <Link className="#skills" to={'/Skills'} onClick={() => hamburger(false)}>Skills</Link>}
          </li>
          <li>
          {
        activeNav=="/Contact"? 
        ""
        :
          <Link className="#contact" to={'/Contact'} onClick={() => hamburger(false)}>Contact</Link>}</li>
          <li>
          {
        activeNav=="/Quali"? 
        ""
        :
        <Link className="#quali" to={'/Quali'} onClick={() =>hamburger(false)}>Qualification</Link>}
          </li>
        </div>
      ) : 
        ""
      }
      ;
    </div>
  );
}

export default Navbar;
