import React from 'react'
import load from '../Images/looood.gif';
import '../CSS/Loader.css';
function Loader() {
  return (
    <div className='loader'>
        <img className='loading' src={load}/>
    </div>
  )
}

export default Loader;