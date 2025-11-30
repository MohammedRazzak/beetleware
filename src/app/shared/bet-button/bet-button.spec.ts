import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetButton } from './bet-button';

describe('BetButton', () => {
  let component: BetButton;
  let fixture: ComponentFixture<BetButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
