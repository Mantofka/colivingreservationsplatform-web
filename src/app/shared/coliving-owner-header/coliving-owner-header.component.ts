import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import Cookies from 'js-cookie';

@Component({
  selector: 'app-coliving-owner-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './coliving-owner-header.component.html',
  styleUrl: './coliving-owner-header.component.less'
})
export class ColivingOwnerHeaderComponent {
  onLogoutClick() {
    localStorage.removeItem("role");
    Cookies.remove("jwt");
    window.location.href = '/login';
  }
}
