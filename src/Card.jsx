import React from 'react'
import profilepic from './assets/Haroon.png'

function Card() {
  return (
    <>   
    
    <div className="card">

    <img className="pic" src={profilepic} alt="profile picture" />
    <h2 className="card-title">Haroon</h2>
    <p className="card-text">I am Student of Software Engineering</p>


</div>
<hr />
</>

  )
}

export default Card