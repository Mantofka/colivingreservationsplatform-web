import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import Cookies from 'js-cookie';
import { HamburgerMenuComponent } from '../hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-administrator-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, HamburgerMenuComponent],
  templateUrl: './administrator-header.component.html',
  styleUrl: './administrator-header.component.less'
})
export class AdministratorHeaderComponent implements OnInit, OnDestroy {
  private mediaQuery: MediaQueryList;
  private mediaQueryListener: () => void;
  isDesktop = signal(true);

  constructor() {
    this.mediaQuery = window.matchMedia('(max-width: 768px)');
    this.mediaQueryListener = this.updateVisibility.bind(this);
  }

  onLogoutClick() {
    localStorage.removeItem("role");
    Cookies.remove("jwt");
    window.location.href = '/login';
  }

  ngOnInit(): void {
    this.updateVisibility();
    this.mediaQuery.addEventListener('change', this.mediaQueryListener);
  }

  ngOnDestroy(): void {
    this.mediaQuery.removeEventListener('change', this.mediaQueryListener);
  }

  private updateVisibility(): void {
    this.isDesktop.set(!this.mediaQuery.matches);
  }  
}