function Header({ score, hiScore }) {
  return (
    <header>
      <h1>Memory game</h1>
      <h2>Current score: {score} High score: {hiScore}</h2>
    </header>
  )
}

export default Header
