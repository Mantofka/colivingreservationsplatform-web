import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantDeleteModalComponent } from './tenant-delete-modal.component';

describe('TenantDeleteModalComponent', () => {
  let component: TenantDeleteModalComponent;
  let fixture: ComponentFixture<TenantDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantDeleteModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
