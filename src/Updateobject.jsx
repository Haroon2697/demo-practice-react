import React, { useState } from 'react';

function Updateobject() {

    const [car, setCar] = useState({ year: 2020, make: "Toyota", model: "Corolla" });

    function handleYearChange(e) {
        setCar(c => ({ ...c, year: e.target.value }));
    }

    function handleMakeChange(e) {
        setCar(c => ({ ...c, make: e.target.value }));
    }

    function handleModelChange(e) {
        setCar(c => ({ ...c, model: e.target.value }));
    }

    return (
        <div>
            <p className="up-p">Your Favorite Car is: {car.year} {car.make} {car.model}</p>
            <input className="up-input" type="number" placeholder="Enter Year" value={car.year} onChange={handleYearChange} />
            <input className="up-input" type="text" placeholder="Enter Make" value={car.make} onChange={handleMakeChange} />
            <input className="up-input" type="text" placeholder="Enter Model" value={car.model} onChange={handleModelChange} />

            <hr />
        </div>
    );
}

export default Updateobject
