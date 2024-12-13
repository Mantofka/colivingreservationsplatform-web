import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthenticationService } from '../services/authentication.service';
import { BaseInputComponent } from '../../../shared/base-input/base-input.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [BaseInputComponent, FormsModule, ReactiveFormsModule, ButtonModule, InputTextModule, RadioButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.less'
})
export class RegisterComponent {

  fb = inject(FormBuilder);
  router = inject(Router);
  private authenticationService = inject(AuthenticationService);
  form!: FormGroup;

  constructor() { 
    this.form = this.fb.group({
      username: [''],
      name: [''],
      surname: [''],
      password: [''],
      email: [''],
      role: ['']
    });
  }

  onSubmit(){
    this.authenticationService.register(this.form.value).subscribe({
      next: () => {
        if(this.form.value.role === 'Tenant'){
          this.router.navigate(['/tenant', 'dashboard']);
        } 
        if(this.form.value.role === 'ColivingOwner'){
          this.router.navigate(['/coliving', 'dashboard']);
        }
      }
    });
  }
}
