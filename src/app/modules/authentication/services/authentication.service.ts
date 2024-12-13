import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestBaseService } from '../../../shared/services/rest-base.service';
import { LoginRequest, RegisterRequest } from '../models/authentication.models';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends RestBaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  register(registerDto: RegisterRequest): Observable<any> {
    return this.CreateAsync<any>(
      registerDto,
      `${environment.api.authenticationApiUrl}/register`
    );
  }

  login(loginDto: LoginRequest): Observable<any> {
    return this.CreateAsync<any>(
      loginDto,
      `${environment.api.authenticationApiUrl}/login`
    );
  }
}