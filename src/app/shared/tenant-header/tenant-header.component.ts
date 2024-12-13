import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import Cookies from 'js-cookie';

@Component({
  selector: 'app-tenant-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './tenant-header.component.html',
  styleUrl: './tenant-header.component.less'
})
export class TenantHeaderComponent {
  onLogoutClick() {
    localStorage.removeItem("role");
    Cookies.remove("jwt");
    window.location.href = '/login';
  }
}
