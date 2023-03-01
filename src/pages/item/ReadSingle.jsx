import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

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
        setTitle(jsonResponse.singleItem.title)
        setImage(jsonResponse.singleItem.image)
        setPrice(jsonResponse.singleItem.price)
        setDescription(jsonResponse.singleItem.description)
    }
    getSingleItem()
  },[params.id])


  return (
    <div className='grid-container-si'>
      <div>
        {image && <img src={require(`../../images${image}`)} alt="item" />}
      </div>
      <div>
        <h1>{title}</h1>
        <h2>{price}€</h2>
        <hr />
        <p>{description}</p>
      </div>
      <div>
        <Link to={`/item/update/${params.id}`}>Edit item</Link>
        <Link to={`/item/delete/${params.id}`}>Delete item</Link>
      </div>
    </div>
  )
}

export default ReadSingle