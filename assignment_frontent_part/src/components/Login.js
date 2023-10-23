import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
      const auth = localStorage.getItem("user");
      if(auth){
        navigate('/');
      }
    }, [])

    const userLogin=async()=>{
        // console.log(name, email,password,city)
        let response = await fetch("http://localhost:7500/login", {
            method: 'post',
            body: JSON.stringify({email,password}),
            headers: {
                'Content-Type':'application/json'
            },
        })
        response = await response.json()
        console.log(response);
        if(response){
            localStorage.setItem("user", JSON.stringify(response))
            navigate("/");
        }else{
            alert("pelase enter correct details")
        }
        
    }

  return (
    <div className='sign-main'>
      <h1>Login page</h1>
      <input className='inp' value={email} type='email' placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} />
      <input className='inp' value={password} type='password' placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={userLogin} className='btn' type='button'>Login</button>
    </div>
  )
}

export default Login
