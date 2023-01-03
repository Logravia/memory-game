import { useState } from 'react';
import './App.css';
import images from './images'
import Card from './card'
import Cardbox from './components/card-box'
import Header from './components/header'
import { shuffle } from './helper.js'

function App() {

  let [cards, setCards] = useState(generateCards(images));
  let [score, setScore] = useState(0);
  let [hiScore, setHiScore] = useState(0);
  let [gameState, setGameState] = useState("playing");

  const handleCardClick = id => {
    let clickedCard = cards.find(card => card.id == id);

    if (clickedCard.clicked) {
      gameOver(); return;
    } else {
      clickedCard.clicked = true;
      let curScore = incrementScore();

      if (victory(curScore)) { gameWon() }
    }

    let newCards = [...cards]
    setCards(shuffle(newCards));
  }

  function generateCards(images) {
    return images.map(img => new Card(img))
  }

  function incrementScore() {
    let curScore = score + 1
    setScore(curScore);
    if (curScore > hiScore) { setHiScore(curScore) }
    return curScore;
  }

  function reset() {
    setScore(0);
    resetCards()
    setGameState("playing")
  }

  function gameOver() {
    setGameState("lost")
    lockCards();
  }

  function gameWon() {
    setGameState("won")
  }

  function victory(curScore) {
    return curScore === cards.length
  }

  function resetCards(){
    cards.forEach(card=>card.clicked = false);
  }

  function lockCards(){
    cards.forEach(card=>card.clicked = true);
  }

  return (
    <div className="App">
      <Header score={score} hiScore={hiScore} gameState={gameState} reset={reset}/>
      <Cardbox cards={cards} noteClick={handleCardClick}/>
    </div>
  );
}

export default App;
