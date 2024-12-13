import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColivingOwnerDashboardComponent } from './coliving-owner-dashboard.component';

describe('ColivingOwnerDashboardComponent', () => {
  let component: ColivingOwnerDashboardComponent;
  let fixture: ComponentFixture<ColivingOwnerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColivingOwnerDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColivingOwnerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
