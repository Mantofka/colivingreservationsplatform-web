import { Component, inject } from '@angular/core';
import { ColivingOwnerHeaderComponent } from '../coliving-owner-header/coliving-owner-header.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TenantHeaderComponent } from '../tenant-header/tenant-header.component';
import { RoleEnum } from '../models/roles';
import { AdministratorHeaderComponent } from "../administrator-header/administrator-header.component";
import { AuthService } from '../../services/auth.service';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ColivingOwnerHeaderComponent, TenantHeaderComponent, RouterModule, CommonModule, AdministratorHeaderComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.less'
})
export class LayoutComponent {
  authService = inject(AuthService);
  role = this.authService.getUserRole() as RoleEnum;
  roleType = RoleEnum;
}
