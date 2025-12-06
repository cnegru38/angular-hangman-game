import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hangman-keyboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hangman-keyboard.html',
  styleUrls: ['./hangman-keyboard.css']
})
export class HangmanKeyboard {
  @Input({ required: true })
  guessedLetters!: Set<string>;

  @Output()
  letterGuessed = new EventEmitter<string>();

  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  onClick(letter: string) {
    this.letterGuessed.emit(letter);
  }
}
