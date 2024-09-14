import React, { useEffect } from 'react'

function Clock() {

const [time, setTime] = React.useState(new Date().toLocaleTimeString());


useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
}
,[]);

  return (
    <div className="clock-container">
        <div className="clock">
            {time}

        </div>
        <hr />
    </div>
  )
}

export default Clock