import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TenantService } from '../tenants/services/tenant.service';
import { MessageService } from 'primeng/api';
import { TenantResponseDto } from '../tenants/models/tenant.model';
import { MessageSeverity } from '../../shared/models/message';
import { FormContainerWrapperComponent } from '../../shared/form-container-wrapper/form-container-wrapper.component';
import { BaseInputComponent } from '../../shared/base-input/base-input.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormContainerWrapperComponent, BaseInputComponent, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less'
})
export class ProfileComponent {
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
      email: [this.tenant?.email || ''],
    });
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
