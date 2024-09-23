import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  imports: [NgFor, CommonModule, RouterModule, FontAwesomeModule],
})
export class SidebarComponent {
  isOpen = false;
  currentRoute: string;

  links = [
    {
      icon: 'fa-brands fa-microsoft',
      name: 'Search CV',
      href: '#',
    },
    {
      icon: 'fa-solid fa-layer-group',
      name: 'Shortlisted CV',
      href: '/',
    },
    {
      icon: 'fa-regular fa-message',
      name: 'Transaction History',
      href: '/credits',
    },
    { icon: 'fa-solid fa-gear', name: 'Search History', href: '#' },
    { icon: 'fa-solid fa-gear', name: 'Profile', href: '#' },
  ];
  faCoffee = faCoffee;
  faUser = faUser;
  constructor(private router: Router) {
    this.currentRoute = this.router.url; // Get the initial route
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url; // Update on route change
    });
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
