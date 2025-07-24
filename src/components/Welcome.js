import React , { useEffect } from 'react';

function Welcome(){
    useEffect(()=>{
      console.log("Component loaded...");
      alert("Welcome Pushpa!")
    },[]);
    return(
        <div>
            <h3>Hello, Pushpa !</h3>
            <p>This message box appears only once using useEffect</p>
        </div>
    );
}
export default Welcome;