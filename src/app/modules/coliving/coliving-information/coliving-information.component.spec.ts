import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColivingInformationComponent } from './coliving-information.component';

describe('ColivingInformationComponent', () => {
  let component: ColivingInformationComponent;
  let fixture: ComponentFixture<ColivingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColivingInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColivingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
