import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useAuth from '../../utils/useAuth'

const Update = () => {

  const params = useParams()

  const [ title, setTitle ] = useState("")
  const [ image, setImage ] = useState("")
  const [ price, setPrice ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ email, setEmail ] = useState("")

  useEffect(()=> {
    const getSingleItem = async()=> {
      const response = await fetch(`https://tomokon-shoppingsite.onrender.com/item/update/${params.id}`)
      const jsonResponse = await response.json()
      
      setTitle(jsonResponse.singleItem.title)
      setPrice(jsonResponse.singleItem.price)
      setImage(jsonResponse.singleItem.image)
      setDescription(jsonResponse.singleItem.description)
      setEmail(jsonResponse.singleItem.Email)
    }
    getSingleItem()
  },[params.id])

  const handleSubmit = async(event)=> {
    event.preventDefault()
    try {
      const response = await fetch(`https://tomokon-shoppingsite.onrender.com/item/update/${params.id}`, {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify({
          title: title,
          price: price,
          image: image,
          description: description,
          email:email
        })
      })
      const jsonData = await response.json()
      alert(jsonData.message)
    }
    catch(err) {
      alert("Failed to edit item.")
    }
  }

  const loginUser = useAuth()

  if (loginUser){
    return (
      <div>
        <h1>Edit Item</h1>
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
            onChange={(event)=>setImage(event.target.value)}
            type="text" name="image" placeholder='Put item picuture' required />
          <textarea
            value={description}
            onChange={(event)=>setDescription(event.target.value)}
            type="text" name="description" rows="15" placeholder='Describe' required />
          <button>Edit Item</button>
        </form>
      </div>
    )
  } else {
    return <h1>You are not auther.</h1>
  }
  }


export default Update