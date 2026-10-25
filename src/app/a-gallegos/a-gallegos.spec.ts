import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AGallegos } from './a-gallegos';

describe('AGallegos', () => {
  let component: AGallegos;
  let fixture: ComponentFixture<AGallegos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AGallegos],
    }).compileComponents();

    fixture = TestBed.createComponent(AGallegos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
