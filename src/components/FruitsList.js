import React from 'react'

function FruitsList(){
    const fruits=['Apple','Banana','Graps','Pineapple'];
  return (
    <div>
        <h2>List of Fruits : </h2>
        <ul>
            {fruits.map((fruit,index)=>(

                <li key={index}>{fruit}</li>

            ))}
        </ul>
      
    </div>
  )
}

export default FruitsList;
