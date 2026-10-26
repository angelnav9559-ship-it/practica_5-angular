import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DJoel } from './d-joel';

describe('DJoel', () => {
  let component: DJoel;
  let fixture: ComponentFixture<DJoel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DJoel],
    }).compileComponents();

    fixture = TestBed.createComponent(DJoel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
