import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LPrado } from './l-prado';

describe('LPrado', () => {
  let component: LPrado;
  let fixture: ComponentFixture<LPrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LPrado]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LPrado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
