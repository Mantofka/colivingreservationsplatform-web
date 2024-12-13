import { Component, forwardRef, input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-base-input',
  standalone: true,
  imports: [FormsModule, InputTextModule],
  templateUrl: './base-input.component.html',
  styleUrl: './base-input.component.less',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BaseInputComponent),
      multi: true,
    },
  ],
})
export class BaseInputComponent {
  label = input.required<string>();

  placeholder = input<string>();

  onChange: any = () => {}
  onTouch: any = () => {}

  val= ""

  set value(val: string) {
      this.val = val;
      this.onChange(val);
      this.onTouch();
  }

  get value() {
    return this.val;
  }

  writeValue(value: string){ 
    this.val = value
    this.onChange(value);
    this.onTouch();
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(fn: any){
    this.onTouch = fn
  }
}
