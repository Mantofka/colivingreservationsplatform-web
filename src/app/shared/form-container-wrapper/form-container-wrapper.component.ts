import { Component, inject, input } from '@angular/core';
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

  onBackClick() {
    this.location.back()
  }
}
