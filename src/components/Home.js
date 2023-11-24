import React from 'react';
import '../CSS/Home.css';
import Aboutus from './Aboutus';
import Skills from './Skills';
import Contact from './Contact';
import Quali from './Quali';

function Home() {
  return (
    <div className="hom">
        <div ><p className="hm">Abhishek Mankude</p>
    </div>
    <Aboutus/>
    <Skills/>
    <Contact/>
    <Quali/>
  
    </div>
  )
}

export default Home;