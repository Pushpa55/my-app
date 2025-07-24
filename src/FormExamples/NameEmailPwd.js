import React ,{use, useState}from 'react'

function NameEmailPwd(){

    const [name,setName]=useState("");
    const [email,setEmail]=useState("")
    const [pwd,setPwd]=useState("")
    const [submit,setSubmit]=useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();

        setSubmit({name,email,pwd})
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Enter your name'value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type='email' placeholder='Enter your email'value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type='password' placeholder='Enter your password'value={pwd} onChange={(e)=>setPwd(e.target.value)}/>

          <button type='submit'>Submit</button>

        </form>

        {setSubmit &&(
            <div>
            setSubmit.name
            setSubmit.email
            setSubmit.pwd
        </div>
        )
        }
    </div>
  )
}

export default NameEmailPwd
