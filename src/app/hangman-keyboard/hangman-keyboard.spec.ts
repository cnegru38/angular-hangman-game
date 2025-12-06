import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanKeyboard } from './hangman-keyboard';

describe('HangmanKeyboard', () => {
  let component: HangmanKeyboard;
  let fixture: ComponentFixture<HangmanKeyboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HangmanKeyboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangmanKeyboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
