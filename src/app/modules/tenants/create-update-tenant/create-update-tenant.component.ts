import { Component, inject } from '@angular/core';
import { FormContainerWrapperComponent } from '../../../shared/form-container-wrapper/form-container-wrapper.component';
import { CommonModule } from '@angular/common';
import { BaseInputComponent } from '../../../shared/base-input/base-input.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TenantResponseDto } from '../models/tenant.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TenantService } from '../services/tenant.service';
import { CalendarModule } from 'primeng/calendar';
import { MessageSeverity } from '../../../shared/models/message';

@Component({
  selector: 'app-create-update-tenant',
  standalone: true,
  imports: [FormContainerWrapperComponent, CommonModule, BaseInputComponent, ReactiveFormsModule, CalendarModule],
  templateUrl: './create-update-tenant.component.html',
  styleUrl: './create-update-tenant.component.less'
})
export class CreateUpdateTenantComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  private tenantService = inject(TenantService);
  private activatedRoute = inject(ActivatedRoute);
  private messageService = inject(MessageService);
  form!: FormGroup;

  tenant?: TenantResponseDto = this.activatedRoute.snapshot.data["tenant"];

  constructor() { 
    this.form = this.fb.group({
      id: [{value: this.tenant?.id || null, disabled: true}],
      name: [this.tenant?.name || '', Validators.required],
      surname: [this.tenant?.surname || '', Validators.required],
      phoneNumber: [this.tenant?.phoneNumber || '', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
      birthDate: [this.tenant ? new Date(this.tenant?.birthDate) : null],
      email: [this.tenant?.email || '', Validators.required],
    });
  }

  onSubmit(){
    if(!this.form.valid) return;
    const form = this.form.getRawValue();
    if(this.tenant?.id){
      this.tenantService.updateTenant(this.tenant.id, form).subscribe({
        next: () => {
          this.router.navigate(['/tenants']);
          this.messageService.add({severity: MessageSeverity.SUCCESS, summary:'Success', detail: 'Profile updated successfully'});
        },
        error: () => {
          this.messageService.add({severity: MessageSeverity.ERROR, summary:'Error', detail: 'An error occurred while updating the coliving'});
        }
      });
    }
  }

        get emailControl(): FormControl {
          return this.form.get('email') as FormControl;
        }
        get phoneNumberControl(): FormControl {
          return this.form.get('phoneNumber') as FormControl;
        }
        get surnameControl(): FormControl {
          return this.form.get('surname') as FormControl;
        }
        get nameControl(): FormControl {
          return this.form.get('name') as FormControl;
        }
}
