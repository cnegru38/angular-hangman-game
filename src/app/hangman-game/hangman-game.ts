import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HangmanKeyboard } from '../hangman-keyboard/hangman-keyboard';
import { HangmanWord } from '../hangman-word/hangman-word';
import { HangmanGuessesBar } from '../hangman-guesses-bar/hangman-guesses-bar';

@Component({
  selector: 'hangman-game',
  standalone: true,
  imports: [
    CommonModule,
    HangmanKeyboard,
    HangmanWord,
    HangmanGuessesBar
  ],
  templateUrl: './hangman-game.html',
  styleUrls: ['./hangman-game.css']
})
export class HangmanGame {
  word = 'ANGULAR';
  guessedLetters = new Set<string>();
  wrongGuesses = 0;
  maxGuesses = 6;

  get guessesLeft() {
    return this.maxGuesses - this.wrongGuesses;
  }

  onGuess(letter: string) {
    if (this.guessedLetters.has(letter)) return;

    this.guessedLetters.add(letter);

    if (!this.word.includes(letter)) {
      this.wrongGuesses++;
    }
  }
}
