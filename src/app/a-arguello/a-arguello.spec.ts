import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AArguello } from './a-arguello';

describe('AArguello', () => {
  let component: AArguello;
  let fixture: ComponentFixture<AArguello>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AArguello]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AArguello);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
