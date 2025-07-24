import React,{useState} from "react";

function ColorChange(){

    const [color, setColor]=useState('black');

    const changeColor =()=>{

        setColor(color==='black'? 'blue':'black');
    }

 return(
   
     <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ color: color }}>This is my color-changing text</h2>

      <button onClick={changeColor}>Change Text Color</button>
     </div>
 );

}
export default ColorChange;