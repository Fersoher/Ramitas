import React from 'react'

function Card({name, lastName}) {
  return (
    <div>
        <h1>{name}</h1>
        <p>{lastName}</p>
    </div>
  )
}

export default Card