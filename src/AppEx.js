import React, { useEffect, useMemo, useReducer } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { ThemeContext } from "./context/ThemeContext";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList"; 

import './styles.css';

const todoReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return action.payload;
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

function AppEx() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("app_theme", false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  const [todos, dispatch] = useReducer(todoReducer, []);
  
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todo_list_v2")) || [];
    dispatch({ type: "INIT", payload: savedTodos });
  }, []);

  useEffect(() => {
    localStorage.setItem("todo_list_v2", JSON.stringify(todos));
  }, [todos]);

  const uncompletedCount = useMemo(() => {
    return todos.filter((todo) => !todo.completed).length;
  }, [todos]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={`app-container ${isDarkMode ? "dark" : "light"}`}>
        <div className="todo-wrapper">
          <h1 className="title"> React Hooks Demo</h1>
          
          <div className="theme-toggle">
            <button onClick={toggleTheme}>
              {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
          
          <ToDoForm dispatch={dispatch} />
          
          <div className="stats-section">
            <h3> Chua hoan thanh: {uncompletedCount}</h3>
          </div>
          
          {/* Đã sửa: Thay <div> thành component <ToDoList> và sửa chữ dispatch */}
          <ToDoList todos={todos} dispatch={dispatch} />
          
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default AppEx;