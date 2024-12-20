import { Component, inject, input, model, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-container-wrapper',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './form-container-wrapper.component.html',
  styleUrl: './form-container-wrapper.component.less'
})
export class FormContainerWrapperComponent {
  location = inject(Location);
  title = input.required();
  backTitle = input('Back');
  submit = output();
  submitTitle = input('');

  onBackClick() {
    this.location.back()
  }

  onSubmitClick() {
    this.submit.emit();
  }
}
