import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantListCardComponent } from './tenant-list-card.component';

describe('TenantListCardComponent', () => {
  let component: TenantListCardComponent;
  let fixture: ComponentFixture<TenantListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantListCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
