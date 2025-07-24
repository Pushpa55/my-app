// ThemeToggle.js
import React, { useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const style = {
    backgroundColor: isDark ? '#333' : '#fff',
    color: isDark ? '#fff' : '#000',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease-in-out',
  };

  return (
    <div style={style}>
      <h1>{isDark ? 'Dark Mode 🌙' : 'Light Mode ☀️'}</h1>
      <button onClick={toggleTheme}>
        Switch to {isDark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
