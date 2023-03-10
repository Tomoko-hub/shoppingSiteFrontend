import React from 'react'
import { useState } from 'react'
import useAuth from '../../utils/useAuth'

const Create = () => {
  const [ title, setTitle ] = useState("")
  const [ price, setPrice ] = useState("")
  const [ image, setImage ] = useState("")
  const [ description, setDescription ] = useState("")

  const handleSubmit = async(event)=> {
    event.preventDefault()
    try {
      const response = await fetch("https://tomokon-shoppingsite.onrender.com/item/create", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify({
          title: title,
          price: price,
          image: image,
          description: description
        })
      })
      const jsonData = await response.json()
      alert(jsonData.message)
    }
    catch(err) {
      alert("Failed to create item.")
    }
  }

  const loginUser = useAuth()

  if (loginUser){
    return (
      <div>
        <h1 className='page-title'>Create Item</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={(event)=>setTitle(event.target.value)} 
            type="text" name="title" placeholder='Put item name' required />
          <input
            value={price}
            onChange={(event)=>setPrice(event.target.value)}
            type="text" name="price" placeholder='Put item price' required />
          <input
            value={image}
            Change={(event)=>setImage(event.target.value)}
            type="text" name="image" placeholder='Put item picuture' required />
          <textarea
            value={description}
            onChange={(event)=>setDescription(event.target.value)}
            type="text" name="description" rows="15" placeholder='Describe' required />
          <button>Create Item</button>
        </form>
      </div>
    )
  }
}

export default Create
