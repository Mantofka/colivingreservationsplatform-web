import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColivingCardComponent } from './coliving-card.component';

describe('ColivingCardComponent', () => {
  let component: ColivingCardComponent;
  let fixture: ComponentFixture<ColivingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColivingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColivingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
