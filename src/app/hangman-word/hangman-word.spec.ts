import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanWord } from './hangman-word';

describe('HangmanWord', () => {
  let component: HangmanWord;
  let fixture: ComponentFixture<HangmanWord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HangmanWord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangmanWord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
