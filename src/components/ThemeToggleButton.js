import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';

// 1. Create Context
const ThemeContext = createContext();

// 2. Theme Toggle Button
function ThemeToggleButton() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme}
      style={{
        padding: '10px',
        backgroundColor: isDark ? '#444' : '#ddd',
        color: isDark ? 'white' : 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Switch to {isDark ? 'Light' : 'Dark'} Mode
    </button>
  );
}

// 3. Themed Content
function Content() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: isDark ? '#333' : '#f0f0f0',
      color: isDark ? '#f0f0f0' : '#333',
      borderRadius: '10px'
    }}>
      <h2>This content changes with the theme!</h2>
    </div>
  );
}

// 4. Main App
function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div style={{
        minHeight: '100vh',
        padding: '20px',
        backgroundColor: isDark ? '#121212' : '#ffffff',
        color: isDark ? '#ffffff' : '#000000'
      }}>
        <h1>🌗 Theme Toggle App</h1>
        <ThemeToggleButton />
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

// 5. Render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
