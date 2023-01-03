import { useState } from 'react';
import './App.css';
import images from './images'
import Card from './card'
import Cardbox from './components/card-box'
import Header from './components/header'
import {shuffle} from './helper.js'

function App() {

  let [cards, setCards] = useState(generateCards(images));
  let [score, setScore] = useState(0);
  let [hiScore, setHiScore] = useState(0);
  let [gameState, setGameState] = useState("start");

  const handleCardClick = id => {
    let clickedCard = cards.find(card=>card.id == id);

    if (clickedCard.clicked){
      gameOver()
      return;
    } else {
      incrementScore();
      clickedCard.clicked = true;
    }

    let newCards = [...cards]
    setCards(shuffle(newCards));
  }

  function generateCards (images) {
    return images.map(img=>new Card(img))
  }

  function incrementScore() {
    let curScore = score + 1
    setScore(curScore);
    if (curScore > hiScore) { setHiScore(curScore) }
  }

  function gameOver(){
    setScore(0);
    setCards(generateCards(images))
    setGameState("Lost")
  }


  return (
    <div className="App">
      <Header score={score} hiScore={hiScore}/>
      <Cardbox cards={cards} noteClick={handleCardClick}></Cardbox>
    </div>
  );
}

export default App;
