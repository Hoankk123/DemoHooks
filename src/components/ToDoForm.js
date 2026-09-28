import React, { useCallback, useRef, useState } from 'react'

function ToDoForm({dispatch}) {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);
    const handleAddToDo = useCallback(() =>{
        if(inputValue.trim() !== ''){
            dispatch({ type: 'ADD_TODO', payload: inputValue.trim()});
            setInputValue('');
            inputRef.current.focus();
        }
    }, [inputValue, dispatch]);
  return (
    <div className='add-task-section'>
      <h2>Them cong viec</h2>
      <div className='input-group'> 
        <input ref={inputRef} type='text' value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddToDo()}
        placeholder='Nhap cong viec...'
        />
        <button onClick={handleAddToDo}>Them</button>
      </div>
    </div>
  )
}

export default ToDoForm
