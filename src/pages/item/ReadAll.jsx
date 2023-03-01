import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ReadAll = () => {
    const [ allItems, setAllItems ] = useState()

    useEffect(()=> {
        const getAllItems =async()=>{
            const response = await fetch("https://tomokon-shoppingsite.onrender.com")
            const jsonResponse = await response.json()
            setAllItems(jsonResponse)
        }
        getAllItems()
    }, [])

  return (
    <div>
        <div className='grid-container-in'>
        {allItems && allItems.allItems.map(item =>
            <Link to={`/item/${item._id}`} key={item._id}>
                <img 
                    src={require(`../../images${item.image}`)}
                    alt="item">
                </img>
                <div className='texts-area'>
                    <h2>{item.price}€</h2>
                    <h3>{item.title}</h3>
                    <p>{item.description.substring(0,80)}...</p>
                </div>
            </Link>
            )}
            </div>
    </div>
  )
}

export default ReadAll
