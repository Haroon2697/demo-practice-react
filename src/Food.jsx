import React from 'react'

function Food() {
    const food = "Pizza";
    const drink = "Coke";
    
  return (
    <div>
        <h2>Today's Menu</h2>
        <ul>
            <li>Food :{food}</li>
            <li>Drinks :{drink}</li>
        </ul>
        <hr></hr>
        
    </div>
  )
}

export default Food