import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
      const auth = localStorage.getItem("user");
      if(auth){
        navigate('/');
      }
    }, [])

    const userRegister=async()=>{
        let response = await fetch("http://localhost:7500/register", {
            method: 'post',
            body: JSON.stringify({name, email,password}),
            headers: {
                'Content-Type':'application/json'
            },
        })
        response = await response.json()
        localStorage.setItem("user", JSON.stringify(response))
        setName("");
        setEmail("");
        setPassword("");
    }

  return (
    <div className='sign-main'>
      <h1>Register page</h1>
      <input className='inp' value={name} type='text' placeholder='enter your name' onChange={(e)=>setName(e.target.value)} />
      <input className='inp' value={email} type='email' placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} />
      <input className='inp' value={password} type='password' placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={userRegister} className='btn' type='button'>Register</button>
    </div>
  )
}

export default Signup
