import { useState, useEffect } from 'react'
import './App.css'
import Game from './Game';
import Footer from './Footer';
import ScoreBoard from './ScoreBoard';
import Logo from './assets/logo.png'

const serverUrl = 'https://localhost:5173'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [deck, setDeck] = useState([1, 2, 3, 4, 5, 6]);
  const [stack, setStack] = useState([]);

  function resetGame() {
    setScore(0);
    setGameOver(false);
    setStack([]);
  }
  
  return (<section className='app'>
    {/* <h1>
      <img className='logo' src={Logo} alt="jujutsu kaisen logo" />
    </h1> */}
    <ScoreBoard
    score={score}
    bestScore={bestScore}
    gameOver={gameOver}
    setGameOver={setGameOver}
    resetGame={resetGame}
    />
    <Game
    score={score}
    setScore={setScore}
    setBestScore={setBestScore}
    bestScore={bestScore}
    gameOver={gameOver}
    setGameOver={setGameOver}
    setDeck={setDeck}
    deck={deck}
    setStack={setStack}
    stack={stack}
    />

    <Footer/>
  </section>)
}

export default App
