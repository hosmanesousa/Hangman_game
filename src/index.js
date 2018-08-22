// HTTP (Hypertext Transfer Protocol)
// Request - what do we want to do
// Response - what was actually done
// Websocked - Allow two protocols to communicate real time
// -> used to refresh the browser whenever something changes

/*

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
    if ( e.target.readyState === 4 && e.target.status === 200) { 
        const data = JSON.parse(e.target.responseText) 
        console.log(data);
    } else if (e.target.readystate === 4){
        console.log("Error");
    }
})

request.open('GET','http://puzzle.mead.io/puzzle');

request.send();

*/

import uuidv4 from 'uuid/v4';
import Hangman from './hangman.js';
import getPuzzle from './requests.js';



let puzzleEl = document.getElementById('puzzleWord');
let remainGuess = document.getElementById('remainingGuesses');
let guessed = document.getElementById('guessed');
let guessEl = document.getElementById('guess');

// functions

//const game1 = new Hangman('New York', 6);
let game1;
/*
//puzzleEl.textContent= game1.getPuzzle();
//remainGuess.textContent = game1.printStatus();
puzzleEl.textContent= game1.puzzle;
remainGuess.textContent = game1.statusMessage;
//console.log(game1.status);
*/

window.addEventListener('keypress', (e)=> {
    const guess = String.fromCharCode(e.charCode);
        game1.makeGuess(guess);
        guessEl.textContent = `Your guess was ${guess}`;
        //puzzleEl.textContent = game1.getPuzzle();
        puzzleEl.textContent = game1.puzzle;
        game1.gameStatus();
    //remainGuess.textContent = game1.printStatus();
    remainGuess.textContent = game1.statusMessage;
    render();
});

/*
getPuzzle( (error, puzzle) => {
    if ( error) { 
        console.log(`Error: ${error}`);
    } else {
        console.log( puzzle);
    }
})
*/

const render = () => {
    puzzleEl.innerHTML = '';
    remainGuess.textContent = game1.statusMessage;
   
    console.log( game1.puzzle);
    for ( let i =0; i < game1.puzzle.length; i++) {
        const span = document.createElement('span'); 
        span.textContent = game1.puzzle.charAt(i);
        puzzleEl.appendChild(span);
    }
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5);
    render();
}
document.getElementById('reset').addEventListener('click', ()=> {
    startGame();
})

startGame();

//////////////////////////////////////////////////
/*
const myPuzzlePromise = getPuzzle('3')
myPuzzlePromise.then( (puzzle)=> {
    console.log(puzzle)
}, (err)=> {
    console.log(`Error: ${err}`)
});
*/