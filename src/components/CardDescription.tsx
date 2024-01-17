import React, { useState } from 'react'
import './CardDescription.scss'
import { cardDetail } from '../App'
import IndividualCard from './IndividualCard'





const CardDescription = ({cardData}:{cardData:cardDetail}) => {
  return (
    <div className='cardDescriptionStyle'>
        {cardData.title?
        <IndividualCard cardData={cardData}/>
        :"Select a product"}
    </div>
  )
}

export default CardDescription