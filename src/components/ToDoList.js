import React from 'react'
import ToDoItem from './ToDoItem'

function ToDoList( {todos, dispatch }) {
  return (
    <ul className='todo-list'>
        {todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} dispatch={dispatch}/>
        ))}
    </ul>
  );
}

export default ToDoList
