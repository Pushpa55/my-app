import React, { useState } from 'react'

function SubscribeToggle(){

    const [isSubscribed, setIsSubscribed]=useState(false);

    const toggleSubscription =()=>{

        setIsSubscribed(! isSubscribed);
    };
  
    return (
     <div style={{ textAlign: 'center', marginTop: '50px' }}>

     <h2>{isSubscribed ? "You are subscribed":"You are not subscribed"}</h2>

     <button onClick={toggleSubscription}> {isSubscribed ? 'Unsubscribe' : 'Subscribe'}</button>
      
    </div>
  );
}

export default SubscribeToggle
