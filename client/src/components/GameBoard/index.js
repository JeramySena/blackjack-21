import React, { useState } from "react";
import Cards from "../Cards";


function GameBoard() {
  const [formState, setFormState] = useState({
    image:"",
    alt:"",
  })

  const { image, alt } = formState;

  const startGame =() => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => response.json())
    .then(response => {
      let deck_id = response.deck_id

      fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
      .then(response => response.json())
       .then(response => {
         setFormState ({ [image]: response.cards[0].image, [alt]: response.cards[0].value })
         console.log(response)
       }
   )}
  )}; 

   
 
  return (
    <main>
        <h1 id="game-board">Let's Play Blackjack!!</h1>
        <button id="btn" onClick={startGame}>Start Game</button>
        <Cards image={formState.image} alt={formState.alt} />
    </main>
  );
};

export default GameBoard;