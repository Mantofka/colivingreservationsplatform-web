import { Component, inject } from '@angular/core';
import { FormContainerWrapperComponent } from '../../../shared/form-container-wrapper/form-container-wrapper.component';
import { CommonModule } from '@angular/common';
import { BaseInputComponent } from '../../../shared/base-input/base-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MessageSeverity } from '../../../shared/models/message';
import { TenantResponseDto } from '../models/tenant.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TenantService } from '../services/tenant.service';
import { CalendarModule } from 'primeng/calendar';

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
      name: [{value: this.tenant?.name || '', disabled: true}],
      surname: [this.tenant?.surname || ''],
      phoneNumber: [this.tenant?.phoneNumber || ''],
      birthDate: [this.tenant ? new Date(this.tenant?.birthDate) : null],
      email: [this.tenant?.email || ''],
    });
    console.log(this.tenant)
  }

  onSubmit(){
    const form = this.form.getRawValue();
    if(this.tenant?.id){
      this.tenantService.updateTenant(this.tenant.id, form).subscribe({
        next: () => {
          this.router.navigate(['/tenant', 'dashboard']);
          this.messageService.add({severity: MessageSeverity.SUCCESS, summary:'Success', detail: 'Profile updated successfully'});
        },
        error: () => {
          this.messageService.add({severity: MessageSeverity.ERROR, summary:'Error', detail: 'An error occurred while updating the coliving'});
        }
      });
    }
  }
}
