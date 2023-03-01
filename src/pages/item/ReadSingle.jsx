import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ReadSingle = () => {

  const params = useParams()

  const [ title, setTitle ] = useState("")
  const [ image, setImage ] = useState("")
  const [ price, setPrice ] = useState("")
  const [ description, setDescription ] = useState("")

  useEffect(()=> {
    const getSingleItem = async()=> {
      const response = await fetch(`http://localhost:5000/item/${params.id}`)
      const jsonResponse = await response.json()
      
      setSingleItem({
        id: jsonResponse.singleItem._id,
        title: jsonResponse.singleItem.title,
        image: jsonResponse.singleItem.image,
        price: jsonResponse.singleItem.price,
        description: jsonResponse.singleItem.description
      })
    }
    getSingleItem()
  },[params.id])


  return (
    <div>
      <div>
        {image && <img src={require(`../../images${image}`)} alt="item" />}
      </div>
      <div>
        <h1>{title}</h1>
        <h2>{price}€</h2>
        <hr />
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ReadSingle