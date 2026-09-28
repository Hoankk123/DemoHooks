import React, { useRef } from 'react'
// useRef : luu gia tri qua nhung lan reder
function DemoRef() {
const inputRef = useRef(null);
const handleFocus = () => {
    inputRef.current.focus();
}
  return (
    <div>
        <input ref={inputRef}/>
        <button onClick={handleFocus}>Focus Input</button>      
    </div>
  )
}

export default DemoRef
