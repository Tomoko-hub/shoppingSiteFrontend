import React from 'react'
import { useState, useEffect } from 'react'

const ReadAll = () => {
    const [ allItems, setAllItems ] = useState()

    useEffect(()=> {
        const getAllItems =async()=>{
            const response = await fetch("http://localhost:5000")
            const jsonResponse = await response.json()
            setAllItems(jsonResponse)
        }
        getAllItems()
    }, [])

  return (
    <div>
        <h1>Read All</h1>
        {allItems && allItems.allItems.map(item =>
            <div key={item._id}>
                <img 
                    src={require(`../../images${item.image}`)}
                    alt="item">
                </img>
                <h2>{item.price}</h2>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
            )}
    </div>
  )
}

export default ReadAll
