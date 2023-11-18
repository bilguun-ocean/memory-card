import React, { useEffect, useState } from "react";
import Card from "./Card";
import './Game.css'

// Durstenfield shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}


export default function Game({ gameOver, setGameOver, score,
                               setScore, bestScore, setBestScore,
                               deck, setDeck, setStack, stack }) {
  // useEffect(()=> {
  //   if(setScore > bestScore) bestScore(score + 1);
  // },[stack, gameOver]);

  function shuffleDeck() {
    const tempDeck = Array.from(deck);
    shuffleArray(tempDeck);
    setDeck(tempDeck);
  }

  function makeTurn(card) {
    // Check to see if the card is in the deck or not
    if(gameOver) return;
    if (stack.includes(card)){
      setGameOver(true);
      if (score > bestScore) {
        setBestScore(score);
    }
      return;
    }

    if (deck.length === score + 1) {
        setScore(score + 1);
        setGameOver(true);
        if (score + 1 > bestScore) {
            setBestScore(score + 1);
        }
        return;
    }
    // Pushing to stack
    setScore(score + 1)
    setStack([...stack, card]);
    shuffleDeck();
}

 
  return (
    <section className="card-layout">
      {deck.map((card) => (
        <Card onClick={makeTurn} key={card} index={card}/>  
      ))}
    </section>
  );
}
