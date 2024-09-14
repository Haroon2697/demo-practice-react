import React,{useState, useEffect} from 'react'

function UseEffectComponent() {

const [width, setWidth] = useState(window.innerWidth);
const [height, setHeight] = useState(window.innerHeight);

useEffect(() => {window.addEventListener('resize',handleResize); // Add event listener
    console.log('Event Listener Added');

    return () => {
        window.removeEventListener('resize',handleResize); // Remove event listener
        console.log('Event Listener Removed');
    }

},[]);

useEffect(() => {
document.title = `Size: ${width} x ${height}`;
},[width,height]);

function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
}

  return (
    <div>

<p>Window Width: {width}px</p>
<p>Window Height: {height}px</p>
<hr />
    </div>
  )
}

export default UseEffectComponent