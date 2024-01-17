import React,{useState} from 'react';
import './App.css';
import { Container } from './components/Container';
import CardDescription from './components/CardDescription';


export type cardDetail= {
  title: string;
  description: string;
  price: number;
  imageSource?: string; // Optional property
};


const App:React.FC=() => {
  const [cardState,setCardState]=useState<cardDetail>({title:"",description:"",price:0,imageSource:""});
  const changeSelectedCard=(cardObj:cardDetail)=>{
  setCardState(cardObj);
  };
  return (
    <div className="AppStyle">
      <Container changeSelectedCard={changeSelectedCard}/>
      <CardDescription cardData={cardState}/>
    </div>
  );
}

export default App;
