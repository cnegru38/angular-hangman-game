import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'hangman-guesses-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hangman-guesses-bar.html',
  styleUrls: ['./hangman-guesses-bar.css'],
})
export class HangmanGuessesBar {
  @Input()
  maxGuesses = 6;

  @Input({ required: true })
  guessesLeft!: number;

  get bars() {
    return Array(this.maxGuesses).fill(0); }
}
