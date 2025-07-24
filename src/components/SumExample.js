import { useState, useMemo } from "react";

function SumExample() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1000000);

  // Expensive sum calculation, but only re-runs when 'number' changes
  const sum = useMemo(() => {
    console.log("Calculating sum...");
    let total = 0;
    for (let i = 1; i <= number; i++) {
      total += i;
    }
    return total;
  }, [number]);

  return (
    <div>
      <h2>Expensive Sum: {sum}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count ({count})</button>
      <button onClick={() => setNumber(number + 1000000)}>Increase Number</button>
    </div>
  );
}

export default SumExample;
