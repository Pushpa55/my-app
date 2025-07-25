import React, { useState, useEffect} from 'react'

function useFetch(url){
    
    const [data, setData ]= useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(url).then((res)=>res.json())
                  .then((result)=>{
                    setData(result);
                    setLoading(false);
                  });
    },[url]);

  return { data, loading };
}

export default useFetch
