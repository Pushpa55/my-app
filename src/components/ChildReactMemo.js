import React, { useCallback, useState,memo } from 'react'

const ChildReactMemo = memo(({onclick}) => {

  console.log("Child component rendered");

  return <button onClick={onclick}>Click Me</button>

});

function Parent(){
  const [count,setCount]=useState(0);

  const handleClick = useCallback(()=>{

    console.log("Button clicked");

  },[]);

  return (
    <div>
       <p>Count : {count}</p>
       <button onClick={()=>setCount(count+1)}>Increase Count</button>
       <ChildReactMemo onClick={handleClick} />
    </div>
  );
}

export default Parent;
