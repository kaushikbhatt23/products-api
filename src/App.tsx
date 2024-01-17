import React,{useState} from 'react';
import './App.css';
import { Container } from './components/Container';
import CardDescription from './components/CardDescription';






const App:React.FC=() => {
  const [cardState,setCardState]=useState<any>();
  return (
    <div className="AppStyle">
      <Container/>
      <CardDescription/>
    </div>
  );
}

export default App;
