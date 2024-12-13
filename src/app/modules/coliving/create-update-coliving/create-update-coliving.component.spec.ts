import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateColivingComponent } from './create-update-coliving.component';

describe('CreateUpdateColivingComponent', () => {
  let component: CreateUpdateColivingComponent;
  let fixture: ComponentFixture<CreateUpdateColivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateColivingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateColivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
