import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContainerWrapperComponent } from './form-container-wrapper.component';

describe('FormContainerWrapperComponent', () => {
  let component: FormContainerWrapperComponent;
  let fixture: ComponentFixture<FormContainerWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormContainerWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormContainerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
