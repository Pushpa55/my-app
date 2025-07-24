import React , {use, useState}from 'react'

function CounterApp() {
   
    const [count, setCount] = useState(0);
    
    const increment = ()=>{
         setCount(prev => prev+1);
    };
    const decrement = ()=>{
         setCount(prev => prev-1);
    };

  return (
    <div style={{textAlign : 'center',marginTop: '20px'}}>

        <h1>Counter App</h1>
        <h2>{count}</h2>

        <button onClick={increment} style={{fontSize:'20px',marginRight:'20px'}}>+</button>
        <button onClick={decrement} style={{fontSize:'20px'}}>-</button>
      
    </div>
  )
}

export default CounterApp
