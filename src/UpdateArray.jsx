import React, { useState } from 'react';

function UpdateArray() {

    const [car, setCar] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");

    function addCar() {
        const newCar = { year, make, model };
        setCar([...car, newCar]);
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }

    function deleteCar(index) {
        setCar(car.filter((c, i) => i !== index));
    }

    function handleYearChange(e) {
        setYear(e.target.value);
    }

    function handleMakeChange(e) {
        setMake(e.target.value);
    }

    function handleModelChange(e) {
        setModel(e.target.value);
    }

    return (
        <div>
            <h2>List of Cars</h2>
            <ul>
                {car.map((c, index) =>
                    <li key={index} onClick={() => deleteCar(index)}>
                        {c.year} {c.make} {c.model}
                    </li>
                )}
            </ul>
           
            <input className="up-input" type="number" placeholder="Enter Year" value={year} onChange={handleYearChange} /><br />
            <input className="up-input" type="text" placeholder="Enter Make" value={make} onChange={handleMakeChange} /><br />
            <input className="up-input" type="text" placeholder="Enter Model" value={model} onChange={handleModelChange} /><br />
            <button className="update-btn" onClick={addCar}>Add Car</button>
            <hr />
        </div>
    );
}

export default UpdateArray;
