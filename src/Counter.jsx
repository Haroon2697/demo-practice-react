import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initialize state with 0

  const increment = () => setCount(count + 1); // Increase count by 1
  const decrement = () => setCount(count - 1); // Decrease count by 1
  const reset = () => setCount(0); // Reset count to 0

  return (
    <div className="counter-container">
      <h1 className="counter"> {count}</h1> {/* Display the current count */}
      <button onClick={increment} className="counter-btn">Increment</button>
      <button onClick={reset} className="counter-btn">Reset</button>
      <button onClick={decrement} className="counter-btn">Decrement</button>
      <hr />
    </div>
   
  );
}

export default Counter;
