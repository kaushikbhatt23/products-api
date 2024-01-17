import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';
import { cardDetail } from '../App';
import './Container.scss'
var async = require('async');





interface Props{
  changeSelectedCard: (cardObj: cardDetail) => void
}


export const Container:React.FC<Props> = (props) => {

  const [data, setData] = useState<any>({ products: [] });

//   console.log(0);
  const fetchData=async()=>{
    const response=await fetch('https://dummyjson.com/products');
    // console.log(2);
    const jsonData=await response.json();
    setData(jsonData)
    // console.log(jsonData)
  }


  useEffect(() => {
    fetchData();
    // console.log(1);
  }, [])
  
//   console.log(3);
  return (
    <>
    {/* {console.log(data)} */}
    <div className='containerStyle'>
      {data.products.map((item:any)=>(
        <Card 
          key={item.id} 
          title={item.title} 
          description={item.description} 
          price={item.price} 
          imageSource={item.images[0]}
          changeSelectedCard={props.changeSelectedCard}/>
      ))}
    </div>
    </>
  )
}