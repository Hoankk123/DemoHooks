import React, { useState, useContext, createContext } from 'react';

// 1. Tạo Context và các Theme
const themes = {
  light: { foreground: "#000000", background: "#eeeeee" },
  dark: { foreground: "#ffffff", background: "#61dafb" }
};

const ThemeContext = createContext();

// 2. Theme Provider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ currentTheme: themes[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Component sử dụng Context
export function ThemeComponent() {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: currentTheme.background, color: currentTheme.foreground, padding: '20px' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>This is a theme-toggled text!</p>
    </div>
  );
}

// Để chạy bài này, bọc ThemeComponent bên trong ThemeProvider trong App.js