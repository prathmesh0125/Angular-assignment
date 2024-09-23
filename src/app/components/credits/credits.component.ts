import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

interface Product {
  id: number;
  name: string;
  color: string;
  price: string;
}

@Component({
  selector: 'app-credits',
  standalone: true,
  imports: [NgFor, CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './credits.component.html',
  styleUrl: './credits.component.css',
})
export class CreditsComponent {
  products: Product[] = [
    { id: 1, name: 'INV-01-09072010', color: '240', price: '1200' },
    { id: 2, name: 'INV-01-09072010', color: '2400', price: '240' },
    { id: 3, name: 'INV-01-09072010', color: '120', price: '240' },
    { id: 4, name: 'INV-01 -09072010', color: '4000', price: '500' },
    { id: 5, name: 'INV-01-09072010', color: '350', price: '240' },
    { id: 6, name: 'INV-01-09072010', color: '600', price: '240' },
  ];
}
