import React, { useState } from 'react';

// Custom hook for counter logic
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment,decrement, reset };
}

function CustomHookCounterCounter() {
  // Use the custom hook
  const { count, increment, decrement, reset } = useCounter(5); // starts at 5

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment +</button>
      <button onClick={decrement}>Decrement -</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CustomHookCounterCounter;
