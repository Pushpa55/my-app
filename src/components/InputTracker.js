import React, { useState } from 'react'

function InputTracker(){

    const [inputText, setInputText]=useState('');

    const handleChange = (e)=>{

        setInputText(e.target.value);
    }
  return (
    <div style={{textAlign:'center',marginTop:'20px'}}>

        <h2>Live Input Tracker</h2>

        <input type= "text" placeholder='Type something...' value={inputText} onChange={handleChange} 
        style={{fontSize:'16px', padding:'8px'}}/>

        <p style={{ marginTop: '20px' }}>You typed: <strong>{inputText}</strong></p>
  
    </div>
  );
}

export default InputTracker
