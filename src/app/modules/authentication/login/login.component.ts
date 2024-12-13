import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { BaseInputComponent } from '../../../shared/base-input/base-input.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import Cookies from 'js-cookie';
import { Router } from '@angular/router';
import { RoleEnum } from '../../../shared/models/roles';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BaseInputComponent, FormsModule, ReactiveFormsModule, ButtonModule, InputTextModule, RadioButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  private authenticationService = inject(AuthenticationService);
  form!: FormGroup;

  constructor() { 
    this.form = this.fb.group({
      username: [''],
      password: [''],
      role: ['']
    });
  }

  onSubmit(){
    this.authenticationService.login(this.form.value).subscribe({
      next: (res) => {
        Cookies.set('jwt', res.token, { expires: 7 });
        localStorage.setItem('role', res.roles[0]);
        if(this.form.value.role === RoleEnum.Tenant){
          this.router.navigate(['/dashboard']);
        } 
        if(this.form.value.role === RoleEnum.ColivingOwner){
          this.router.navigate(['/dashboard']);
        }
        if(this.form.value.role === RoleEnum.Administrator){
          this.router.navigate(['/dashboard']);
        }
      }
    });
  }
}
