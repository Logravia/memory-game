let headerValues = {lost: "You lost the game ...",
                    won: "You won the game!",
                    playing: "The Memory Game"}

function Header({ score, hiScore, reset, gameState }) {
  return (
    <header>
      <h1 className={gameState}>{headerValues[gameState]}</h1>
      <h2>Current score: {score} High score: {hiScore}</h2>
      <button onClick={reset}>Reset</button>
    </header>
  )
}

export default Header
