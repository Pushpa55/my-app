import React from 'react';

function PropDrilling() {
  const userName = "Pushpa";

  return (
    <div>
      <h1>Prop Drilling Example</h1>
      {/* Passing userName as prop */}
      <Child userName={userName} />
    </div>
  );
}

function Child({ userName }) {
  return (
    <div>
      <h2>Child Component</h2>
      {/* Passing userName further down */}
      <GrandChild userName={userName} />
    </div>
  );
}

function GrandChild({ userName }) {
  return (
    <div>
      <h3>GrandChild Component</h3>
      <p>Hello, {userName}!</p>
    </div>
  );
}

export default PropDrilling;
