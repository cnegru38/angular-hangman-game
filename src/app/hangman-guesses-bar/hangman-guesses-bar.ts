import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hangman-guesses-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hangman-guesses-bar.html',
  styleUrls: ['./hangman-guesses-bar.css'],
})
export class HangmanGuessesBar {
  @Input() maxGuesses = 6;
  @Input({ required: true }) guessesLeft!: number;

  get bars() {
    return Array(this.maxGuesses);
  }

  get isWarning() {
    return this.guessesLeft <= 3 && this.guessesLeft > 1;
  }

  get isDanger() {
    return this.guessesLeft <= 1;
  }
}
