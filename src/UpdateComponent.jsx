import React, { useState } from 'react';

function UpdateComponent() {
    // Initialize state with an array of foods
    const [foods, setFoods] = useState(["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Strawberry", "Watermelon", "Peach", "Cherry"]);

    // Function to handle adding a new food
    function handleAddFood() {
        const newFood = document.getElementById("foodinput").value;
        if (newFood) {
            setFoods(f=>[...f, newFood]);  // Add the new food to the array
            document.getElementById("foodinput").value = "";  // Clear the input field
        }
    }

    function handleDeleteFood(index) {
        
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div className="update-com">
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => 
                <li key={index} onClick ={()=>handleDeleteFood(index)}>{food}</li>)}
            </ul>
            <input className="update-input" type="text" id="foodinput" placeholder="Enter Food Name" />
            <button className="update-btn" onClick={handleAddFood}>Add Food</button>
            <hr />
               
        </div>
    );
}

export default UpdateComponent;
