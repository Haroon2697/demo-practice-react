import React, { useState } from 'react';

function Button() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <button onClick={handleClick} className="btn">
        {clicked ? "Ohh yahh 💦" : "Click Me"}
      </button>
      <hr />
    </>
  );
}

export default Button;
