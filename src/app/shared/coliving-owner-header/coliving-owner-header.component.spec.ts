import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColivingOwnerHeaderComponent } from './coliving-owner-header.component';

describe('ColivingOwnerHeaderComponent', () => {
  let component: ColivingOwnerHeaderComponent;
  let fixture: ComponentFixture<ColivingOwnerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColivingOwnerHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColivingOwnerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
