import { useEffect, useState } from "react";
import "./App.css";
import GridBox from "./components/GridBox";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="App">
      <header>
        <p>Wordle-MPAC</p>
      </header>
      <div className="game-content">
        <GridBox />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;

// The player has a total of 6 guesses
// Each guess must be a valid word use API endpoint
// The player must be able to input their guess using their keyboard and pressing enter to submit
// Guesses that are not valid words don’t impact their remaining number of guesses
// If the player guessed a character that’s in the word and in the correct position, the square must be highlighted green use API endpoint
// If the player guessed a character that’s in the word and not in the correct position, the square must be highlighted yellow use API endpoint
// If the player guessed a character that’s not in the word, the square must be highlighted grey use API endpoint
