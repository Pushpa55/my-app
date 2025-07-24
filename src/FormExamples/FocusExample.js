import { useRef } from "react";

function FocusExample() {
    
  const inputRef = useRef();

  const handleClick = () => {
      
    inputRef.current.focus();
    
  };

  return (
      
    <div>
    
      <input ref={inputRef} placeholder="Type here..." />
    
      <button onClick={handleClick}>Focus the Input</button>
    
    </div>
  );
}

export default FocusExample;
