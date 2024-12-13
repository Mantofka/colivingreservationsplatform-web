import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColivingDeleteModalComponent } from './coliving-delete-modal.component';

describe('ColivingDeleteModalComponent', () => {
  let component: ColivingDeleteModalComponent;
  let fixture: ComponentFixture<ColivingDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColivingDeleteModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColivingDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
