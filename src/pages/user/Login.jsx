import React from 'react'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async(event)=> {
    event.preventDefault()
  
  try {
    const response = await fetch("https://tomokon-shoppingsite.onrender.com/user/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    const jsonResponse = await response.json()
    localStorage.setItem("token", jsonResponse.token)
    alert(jsonResponse.message)
  }
  catch(err){
    alert("Failed to login..")
  }
  } 

  return (
    <div>
      <h1 className='page-title'>login</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={
            (event)=> {
              setEmail(event.target.value)
            }
          }
          type="text" name="email" placeholder='Put your email address.' required />
        <input 
          value={password}
          onChange={
            (event)=> {
              setPassword(event.target.value)
            }
          }
          type="text" name="password" placeholder='Put your password' required />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login