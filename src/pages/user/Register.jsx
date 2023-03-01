import React from 'react'
import { useState } from 'react'

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit =async(event)=> {
    event.preventDefault()
    try{
      const response = await fetch("https://tomokon-shoppingsite.onrender.com/user/register", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      })
      const jsonResponse = await response.json()
      alert(jsonResponse.message)
    }
    catch(err){
      alert('Failed to register your info..')
    }
  }
  return (
    <div>
      <h1 className='page-title'>Register User</h1>
      <form onSubmit={handleSubmit}>
        <input 
          value={name} 
          onChange={
          (event)=> setName(event.target.value) 
        }
          type="text" name="name" placeholder='Write Your Name' required
         />
          <input 
            value={email}
            onChange={
              (event)=> setEmail(event.target.value)
            }
            type="text" name="email" placeholder='Put Your Email' required />
          <input 
            value={password}
            onChange={
              (event)=> setPassword(event.target.value)
            }
            type="text" 
            name="password" 
            placeholder='Write password' required />
        
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register
