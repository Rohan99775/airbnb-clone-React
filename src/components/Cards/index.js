import React from 'react'
import './style.css'
import Card from './Card'
import { list } from '../../assets/card-images-new';

function Cards() {
  return (
    <div className='cards-flex'> 
      {list.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  )
}

export default Cards;
