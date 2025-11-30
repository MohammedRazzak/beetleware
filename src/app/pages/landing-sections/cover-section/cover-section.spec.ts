import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverSection } from './cover-section';

describe('CoverSection', () => {
  let component: CoverSection;
  let fixture: ComponentFixture<CoverSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
