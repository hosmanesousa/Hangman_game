let playing = document.getElementById('playing');
class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
	    this.remainingGuesses = remainingGuesses;   
        this.guessedLetters = [];
        this.status = "playing";
        //this.guessedLetters = ['c', 'e'];
    }

    get puzzle() {
        let puzzle = '';

        this.word.forEach((letter) => {
            if ( this.guessedLetters.includes(letter) || letter === ' '){
                puzzle += letter;
            } else {
                puzzle += '*';
            }
        });
        return puzzle;
    }

    makeGuess(guess) {
        guess = guess.toLowerCase();
        const isUnique = !this.guessedLetters.includes( guess);
        const isBadGuess = !this.word.includes(guess);
    
        // disable the guess if the game failed
         if ( this.status !== 'playing') {
             return;
         }

        if ( isUnique){
            //this.guessedLetters.push(guess);
            this.guessedLetters = [...this.guessedLetters, guess];
        }

        if (isUnique && isBadGuess) {
             this.remainingGuesses--;
        }
        this.gameStatus();
    } 

    gameStatus() {
        const finished = this.word.every( (letter) => this.guessedLetters.includes(letter) || letter === ' ');

        if (this.remainingGuesses === 0) {
             this.status = 'failed';
        } else if ( finished ) {
            this.status ='finished';
        } else {
              this.status = 'playing';
        }
        //playing.textContent = this.status;

       /*
        this.word.every( (letter) => {
        const isIncluded = this.guessedLetters.includes(letter);
        if ( isIncluded && this.remainingGuesses > 0) {
            this.status = 'Great work! You guessed the word.';
        } else if (!isIncluded && this.remainingGuesses <= 0) {
             this.status = `Nice try! The word was ${this.word.join('')}`;
        } else {
             this.status = `Guesses left: ${this.remainingGuesses}`;
        };
          }); 
         playing.textContent = this.status;
         */

         //let finished = true;
         //this.printStatus();
    }

    get statusMessage() {
        if ( this.status === 'playing') {
            playing.textContent = `Guess left: ${this.remainingGuesses}`;
        } else if ( this.status === 'finished') {
            playing.textContent = 'Great work! You guessed the word.';
        } else if ( this.status === 'failed'){
            playing.textContent = `Nice try! The word was "${this.word.join('')}"`;
        }
    }

}

/*

const game2 = new Hangman('New Jersey');
//console.log(game2.getPuzzle('New Qrsy'));
console.log(game2.makeGuess('New Marey'))

const game3 = new Hangman('Falcon');
console.log(game3.makeGuess('Felcoomnn'));

*/

/*
Hangman.prototype.makeGuess = function(guess) {
    let foundWord ='';
    guess = guess.toLowerCase();
    this.word.forEach((letter) => {
        if ( guess.indexOf( letter) > -1) {
            foundWord += letter;
            if (!this.guessedLetters.includes(letter)){
                this.guessedLetters.push(letter);
            } 
        } else {
            foundWord += '*';
        }
    });
    console.log(this.guessedLetters);
    return foundWord.trim() + `\nYou have ${this.remainingGuesses} remaining guesses`;
}
*/

/*
Hangman.prototype.getPuzzle = function(puzzleW) {
	let foundWord = '';
	puzzleW = puzzleW.toLowerCase();
    const words = this.word.forEach((letter)=> {	
    	if ( puzzleW.indexOf(letter) > -1 || letter === ' R') {
    		foundWord += letter;
    	    this.guessedLetters.push(letter);
    	} else {
    		foundWord += '*';
    	}
    })
    console.log(this.guessedLetters);
    return foundWord.trim();
};
*/

export { Hangman as default}