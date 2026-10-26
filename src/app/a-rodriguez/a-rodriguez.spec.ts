import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ARodriguez } from './a-rodriguez';

describe('ARodriguez', () => {
  let component: ARodriguez;
  let fixture: ComponentFixture<ARodriguez>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ARodriguez]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ARodriguez);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
