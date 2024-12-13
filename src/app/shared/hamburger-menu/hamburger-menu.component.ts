import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.less'
})
export class HamburgerMenuComponent {
  isOpen = signal(true);

  toggleMenu = () => {
    this.isOpen.set(!this.isOpen())
  }


  performNavigation = () => {
    this.isOpen.set(false)
  }
}
