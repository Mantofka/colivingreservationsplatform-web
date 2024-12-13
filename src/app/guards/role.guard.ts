import { inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RoleEnum } from '../shared/models/roles';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  authService = inject(AuthService);
  router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const allowedRoles: RoleEnum[] = route.data['roles'] || [];
    const userRole = this.authService.getUserRole();
    if (allowedRoles.includes(userRole as RoleEnum)) {
      return true;
    }

    this.router.navigate(['/unauthorized']);
    return false;
  }
}
