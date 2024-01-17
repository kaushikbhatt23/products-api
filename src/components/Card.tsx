import React from 'react'
import './Card.scss'


interface CardProps {
    imageSource: string;
    title: string;
    description: string;
    price: number;
  }


const Card:React.FC<CardProps> = (props) => {

 
  return (
    <div className='cardStyle'>
        {/* <img src={props.imageSource} alt={props.title} className='imageStyle'/> */}
        <h3>{props.title}</h3>
        <hr className='lineStyle'/>
        <p>{props.description}</p>
        {/* <span>Price : ${props.price}</span> */}
    </div>
  )
}

export default Card;