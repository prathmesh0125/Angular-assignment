import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CreditsComponent } from './components/credits/credits.component';
import { NgModule } from '@angular/core';
import { ShortlistedComponent } from './components/shortlisted/shortlisted.component';

export const routes: Routes = [
  { path: '', component: ShortlistedComponent }, // Adjust or add other routes as needed
  { path: 'credits', component: CreditsComponent },
];
