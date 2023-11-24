import React from 'react'
import '../CSS/Card.css';
function Card({QualiP}) {
  return (
    <div>
        <h1>{QualiP.k}</h1>
        <div className='bos'>
        <h2>{QualiP.h}</h2>
        <p>{QualiP.p}</p>
        <div><img className='photo' src={QualiP.I}/></div>
    </div></div>
  )
}

export default Card;