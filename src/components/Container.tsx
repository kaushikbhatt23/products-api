import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';
import './Container.scss'
var async = require('async');


// interface Props{
//   cardState: string;
//   setCardState: React.Dispatch<React.SetStateAction<string>>;
// }


export const Container:React.FC = () => {

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
          imageSource={item.images[0]}/>
      ))}
    </div>
    </>
  )
}