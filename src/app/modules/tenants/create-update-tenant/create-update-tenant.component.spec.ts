import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateTenantComponent } from './create-update-tenant.component';

describe('CreateUpdateTenantComponent', () => {
  let component: CreateUpdateTenantComponent;
  let fixture: ComponentFixture<CreateUpdateTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateTenantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
