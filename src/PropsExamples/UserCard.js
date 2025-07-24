import React from 'react'

function UserCard(props){
  return (
    <div style={{textAlign:'center',margin: '20px',padding: '20px',border: '1px solid red',borderRadius:'5px'}}>
        <h1>{props.name}</h1>
        <h3>Email :{props.email}</h3>
        <h3>Phone :{props.phone}</h3>   
    </div>
  );
}

export default UserCard
