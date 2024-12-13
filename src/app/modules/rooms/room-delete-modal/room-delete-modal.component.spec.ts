import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDeleteModalComponent } from './room-delete-modal.component';

describe('ColivingDeleteModalComponent', () => {
  let component: RoomDeleteModalComponent;
  let fixture: ComponentFixture<RoomDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomDeleteModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
