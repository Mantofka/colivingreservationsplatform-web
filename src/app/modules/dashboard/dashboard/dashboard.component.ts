import { Component, inject, ViewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ColivingService } from '../../coliving/services/coliving.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ColivingDeleteModalComponent } from '../../coliving/coliving-delete-modal/coliving-delete-modal.component';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../services/auth.service';
import { RoleEnum } from '../../../shared/models/roles';
import { AdministratorDashboardComponent } from '../administrator-dashboard/administrator-dashboard.component';
import { TenantDashboardComponent } from '../tenant-dashboard/tenant-dashboard.component';
import { ColivingOwnerDashboardComponent } from "../coliving-owner-dashboard/coliving-owner-dashboard.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AdministratorDashboardComponent, TenantDashboardComponent, ColivingOwnerDashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.less'
})
export class DashboardComponent {
  authService = inject(AuthService);

  userRole = this.authService.getUserRole();
  roleType = RoleEnum;
}
