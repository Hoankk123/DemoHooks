import React from "react";

function ToDoItem({ todo, dispatch }) {
  return (
    <li className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <button
        className="delete-btn"
        onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
      >
        Xoa
      </button>
    </li>
  );
}

export default ToDoItem;
