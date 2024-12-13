import { Component, forwardRef, Input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-base-checkbox',
  standalone: true,
  imports: [FormsModule, CheckboxModule],
  templateUrl: './base-checkbox.component.html',
  styleUrls: ['./base-checkbox.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BaseCheckboxComponent),
      multi: true,
    },
  ],
})
export class BaseCheckboxComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() value: string = ''; // The value that this checkbox represents (e.g., "tenant" or "coliving-owner")

  private _selectedValue: string = ''; // The currently selected value in the form control

  get isChecked(): boolean {
    return this._selectedValue === this.value;
  }

  set isChecked(val: boolean) {
    if (val) {
      this._selectedValue = this.value;
      this.onChange(this._selectedValue);
    } else {
      this._selectedValue = '';
      this.onChange(null);
    }
    this.onTouch();
  }

  writeValue(value: string): void {
    this._selectedValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onChange: any = () => {};
  onTouch: any = () => {};

  toggleChecked(): void {
    this.isChecked = !this.isChecked;
  }
}
