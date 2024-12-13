import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BaseDropdownItem } from '../models/dropdown';

@Component({
  selector: 'app-base-dropdown',
  standalone: true,
  imports: [FormsModule, DropdownModule],
  templateUrl: './base-dropdown.component.html',
  styleUrl: './base-dropdown.component.less',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BaseDropdownComponent),
      multi: true,
    },
  ],
})
export class BaseDropdownComponent implements ControlValueAccessor {
  label = input.required<string>();
  placeholder = input.required<string>();

  options = input.required<BaseDropdownItem[]>();

  selectedValue: any;

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  set value(val: any) {
    this.selectedValue = val;
    this.onChange(val);
    this.onTouch();
  }

}

