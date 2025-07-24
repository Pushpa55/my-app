import { useRef } from "react";

function UseRefExample() {
  const inputRef = useRef();  // Creates a reference

  const handleClick = () => {
    inputRef.current.focus();  // Focuses the input box
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter your name" />
      <button onClick={handleClick}>Focus the Input</button>
    </div>
  );
}

export default UseRefExample;
