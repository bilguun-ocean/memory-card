import { useState } from "react"


export default function ScoreBoard({gameOver,score, bestScore, resetGame}) {
  return(<section className="scoreboard">
    <section className="score">
      <h2>Current Score: {score}</h2>
      <h2>Best Score: {bestScore}</h2>
    </section>
    {gameOver && <h2>GAME OVER</h2>}
    {gameOver && <button onClick={resetGame}>Refresh</button>}
  </section>)
}