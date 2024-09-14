import React, { useState } from 'react';

function Colorpicker() {

    const [color, setColor] = useState("#FFFFFF");

    function handleChange(e) {
        setColor(e.target.value);
    }

  return (
    <div className="color-picker-container">
        <h1>Color Picker</h1>
    <div className="color-picker" style={{bacgroundColor: color}}>
        <p>Selected Color: {color}</p>
        </div>
        <label>Select a color:</label>
        <input type="color" value={color} onChange={handleChange} />
   
        <hr />
    </div>
  )
}

export default Colorpicker