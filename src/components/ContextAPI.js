import React, { createContext, useContext } from 'react';

// 1. Create Context
const UserContext = createContext();

function ContextAPI() {
  const userName = "Pushpa";

  return (
    // 2. Provide Context value
    <UserContext.Provider value={userName}>
      <div>
        <h1>React Context API Example</h1>
        <Child />
      </div>
    </UserContext.Provider>
  );
}

function Child() {
  return (
    <div>
      <h2>Child Component</h2>
      <GrandChild />
    </div>
  );
}

function GrandChild() {
  // 3. Consume context value
  const user = useContext(UserContext);

  return (
    <div>
      <h3>GrandChild Component</h3>
      <p>Hello, {user}!</p>
    </div>
  );
}

export default ContextAPI;
