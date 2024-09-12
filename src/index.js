import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// wordle game
// The player has a total of 6 guesses
// Each guess must be a valid word use API endpoint
// The player must be able to input their guess using their keyboard and pressing enter to submit
// Guesses that are not valid words don’t impact their remaining number of guesses
// If the player guessed a character that’s in the word and in the correct position, the square must be highlighted green use API endpoint
// If the player guessed a character that’s in the word and not in the correct position, the square must be highlighted yellow use API endpoint
// If the player guessed a character that’s not in the word, the square must be highlighted grey use API endpoint
// If at any point the instructions are unclear, follow the existing Wordle rules. You won't be penalized for making reasonable assumptions.