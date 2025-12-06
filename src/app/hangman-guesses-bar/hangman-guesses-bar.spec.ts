import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanGuessesBar } from './hangman-guesses-bar';

describe('HangmanGuessesBar', () => {
  let component: HangmanGuessesBar;
  let fixture: ComponentFixture<HangmanGuessesBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HangmanGuessesBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangmanGuessesBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
