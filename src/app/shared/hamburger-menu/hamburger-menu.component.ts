import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoleEnum } from '../models/roles';
import { ButtonModule } from 'primeng/button';
import Cookies from 'js-cookie';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [RouterModule, CommonModule, ButtonModule],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.less'
})
export class HamburgerMenuComponent {
  isOpen = signal(false);

  get isNotTenant() {
    return !!(localStorage.getItem('role') === RoleEnum.Administrator || localStorage.getItem('role') === RoleEnum.ColivingOwner as RoleEnum);
  }

  toggleMenu = () => {
    this.isOpen.set(!this.isOpen())
  }


  performNavigation = () => {
    this.isOpen.set(false)
  }

  onLogoutClick() {
    localStorage.removeItem("role");
    Cookies.remove("jwt");
    window.location.href = '/login';
  }
}
