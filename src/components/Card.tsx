import React from 'react'
import './Card.scss'
import { cardDetail } from '../App'

interface CardProps {
    imageSource: string;
    title: string;
    description: string;
    price: number;
    changeSelectedCard: (cardObj: cardDetail) => void
  }


const Card:React.FC<CardProps> = (props) => {

 
  return (
    <div className='cardStyle' onClick={()=>props.changeSelectedCard({title:props.title,description:props.description,price:props.price,imageSource:props.imageSource})}>
        <h3>{props.title}</h3>
        <hr className='lineStyle'/>
        <p>{props.description}</p>
    </div>
  )
}

export default Card;