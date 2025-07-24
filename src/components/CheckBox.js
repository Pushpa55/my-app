import React, { useState } from 'react'

function CheckBox(){

    const [agreed , setAgreed] = useState(false);

    const handleChecks = (e)=>{

      e.preventDefault();

        alert("Form submitted successfully");

    };
  return (
      <form onSubmit={handleChecks}>
      <h2>Registration Form</h2>
      <label>
        <input type='checkbox' checked={agreed} onChange={(e)=>setAgreed(e.target.checked)}/>
        I agree to the terms and conditions
      </label>
      <br/>
      <button type='submit' disabled={!agreed}>Submit</button>
    </form>
  );
}

export default CheckBox;
