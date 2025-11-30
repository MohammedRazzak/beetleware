import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticsSection } from './statics-section';

describe('StaticsSection', () => {
  let component: StaticsSection;
  let fixture: ComponentFixture<StaticsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
