import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useAuth from '../../utils/useAuth'

const Delete = () => {

  const params = useParams()

  const [ title, setTitle ] = useState("")
  const [ price, setPrice ] = useState("")
  const [ image, setImage ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ email, setEmail ] = useState("")

  useEffect(()=> {
    const getSingleItem = async()=> {
      const response = await fetch(`http://localhost:5000/item/update/${params.id}`)
      const jsonResponse = await response.json()
      
      setTitle(jsonResponse.singleItem.title)
      setPrice(jsonResponse.singleItem.price)
      setImage(jsonResponse.singleItem.image)
      setDescription(jsonResponse.singleItem.description)
      setEmail(jsonResponse.singleItem.email)
    }
    getSingleItem()
  },[params.id])

  const handleSubmit = async(event)=> {
    event.preventDefault()
    try {
      const response = await fetch(`http://localhost:5000/item/delete/${params.id}`, {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      const jsonData = await response.json()
      alert(jsonData.message)
    }
    catch(err) {
      alert("Failed to delete item.")
    }
  }

  const loginUser = useAuth()

  if(loginUser === email) {
    return (
      <div className='delete-page'>
        <h1 className='page-title'>Delete Item</h1>
        <form onSubmit={handleSubmit}>
          <h2>{title}</h2>
          {image && <img src={require(`../../images${image}`)} alt="item" />}
          <h3>{price}€</h3>
          <p>{description}</p>
        </form>
      </div>
    )
  } else {
    return <h1>You don't have authorities.</h1>
  }

}

export default Delete