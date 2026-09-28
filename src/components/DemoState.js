import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(10);
    useEffect(() => {
        console.log("Function component mounted");
    });
    useEffect(() => {
        console.log("Function component updated");
    }, [count]);
    useEffect(() =>{
        console.log("Function component unmounted");
    }, [])
  return (
    <div>
      <h3>Number:{count} </h3>
      <button onClick={() => setCount(count + 5)}>Increase</button>
    </div>
  )
}

export default Counter
