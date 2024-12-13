import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColivingComponent } from './coliving.component';

describe('ColivingComponent', () => {
  let component: ColivingComponent;
  let fixture: ComponentFixture<ColivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColivingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
