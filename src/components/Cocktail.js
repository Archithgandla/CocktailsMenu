import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({name,image,glass,info,id}) => {

  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name}/>
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`cocktail/${id}`} className='btn' >Details</Link>
      </div>
    </article>
  )
}

export default Cocktail
