import React from 'react'
import "./Card.css"

const Card = ({img,title,desc}) => {
  return (
    <div className='card'>
        <div className="card__img">
           <img src={img} alt="" />
        </div>
       

      
    </div>
  )
}

export default Card
