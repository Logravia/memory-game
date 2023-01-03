import { useState } from 'react';
import './App.css';
import images from './images'
import Card from './card'
import Cardbox from './components/card-box'
import Header from './components/header'

function App() {
  const generateCards = ()=> images.map(img=>new Card(img))

  let [cards, setCards] = useState(generateCards);
  let [score, setScore] = useState(0);
  let [hiScore, setHiScore] = useState(0);


  const handleCardClick = id => {

  }

  return (
    <div className="App">
      <Header score={score} hiScore={hiScore}/>
      <Cardbox cards={cards} noteClick={handleCardClick}></Cardbox>
    </div>
  );
}

export default App;
