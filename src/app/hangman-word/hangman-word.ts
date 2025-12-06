import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hangman-word',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hangman-word.html',
  styleUrls: ['./hangman-word.css']
})
export class HangmanWord {
  @Input({ required: true }) word!: string;
  @Input({ required: true }) guessedLetters!: Set<string>;

  get letters(): string[] {
    return Array.from(this.word);
  }
}
