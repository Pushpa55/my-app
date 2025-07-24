import React,{useState} from 'react'

function LightONOff(){

    const [isOn, setIsOn]=useState(false);

    const handleToggle = ()=>{

        setIsOn(!isOn);
    }

  return (
    <div>
        <h2>Light is {isOn ? 'ON':'OFF'}</h2>
        <button onClick={handleToggle}>{isOn ? 'TurnOFF' : 'TrunON'}</button>
      
    </div>
  )
}

export default LightONOff;
