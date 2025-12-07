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
  private readonly WORDS = [
  'ANGULAR',
  'TYPESCRIPT',
  'COMPONENT',
  'BINDING',
  'TEMPLATE',
  'SERVICE',
  'DIRECTIVE',
  'MODULE'
];
  word = this.getRandomWord();
  guessedLetters = new Set<string>();
  wrongGuesses = 0;
  maxGuesses = 6;

  private getRandomWord(): string {
  const index = Math.floor(Math.random() * this.WORDS.length);
  return this.WORDS[index];
  }

  get guessesLeft() {
    return this.maxGuesses - this.wrongGuesses;
  }

  onGuess(letter: string) {
    if (this.isGameOver) return;
    if (this.guessedLetters.has(letter)) return;

    this.guessedLetters.add(letter);

    if (!this.word.includes(letter)) {
      this.wrongGuesses++;
    }
  }

  get hasWon(): boolean {
  return Array.from(this.word).every(letter =>
    this.guessedLetters.has(letter)
  );
  }

  get hasLost(): boolean {
    return this.guessesLeft === 0;
  }

  get isGameOver(): boolean {
    return this.hasWon || this.hasLost;
  }

  get isWarning(): boolean {
  return this.guessesLeft <= 3 && this.guessesLeft > 1;
  }

  get isDanger(): boolean {
  return this.guessesLeft <= 1;
  }

  get remainingAttemptsText(): string {
  return `Remaining attempts: ${this.guessesLeft}`;
  }

  get guessedLettersList(): string {
  return this.guessedLetters.size
    ? Array.from(this.guessedLetters).join(', ')
    : 'None';
  }

  resetGame() {
  this.guessedLetters.clear();
  this.wrongGuesses = 0;
  this.word = this.getRandomWord();
  }

}