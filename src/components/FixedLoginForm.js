import React, { useState } from 'react';

function FixedLoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Fixed login credentials
  const fixedUsername = 'admin';
  const fixedPassword = '12345';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === fixedUsername && password === fixedPassword) {
      setMessage('Login Successful!');
    } else {
      setMessage('Invalid Username or Password');
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <h3>{message}</h3>
    </div>
  );
}

export default FixedLoginForm;
