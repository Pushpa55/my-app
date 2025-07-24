import React,{useState} from 'react'

function LoginStatus(){
   
    const [isLoggedIn, setIsLoggedIn]=useState(false);

    const handleChange = ()=>{

        setIsLoggedIn(!isLoggedIn);
    }
  return (
    <div style={{testAlign: 'center',marginRight: '20px'}}>
      <h2>{isLoggedIn? 'Welcome Back Pushpa': 'Please login'}</h2>
      <button onClick={handleChange}>{isLoggedIn?'Logout':'Login'}</button>
    </div>
  );
}

export default LoginStatus
