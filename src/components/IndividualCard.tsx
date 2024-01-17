// CardComponent.jsx
import React from 'react';
import { cardDetail } from '../App'
import './IndividualCard.scss';

interface Props{
    cardData:cardDetail;
}


const CardComponent:React.FC<Props> = (props) => {
  return (
    <div className="card">
      <img src={props.cardData.imageSource} alt={props.cardData.title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{props.cardData.title}</h3>
        <p className="card-description">{props.cardData.description}</p>
        <span className="card-price">${props.cardData.price}</span>
      </div>
    </div>
  );
};

export default CardComponent;
