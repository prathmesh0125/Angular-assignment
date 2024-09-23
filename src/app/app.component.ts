import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreditsComponent } from './components/credits/credits.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ShortlistedComponent } from './components/shortlisted/shortlisted.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CreditsComponent,
    SidebarComponent,
    TopbarComponent,
    ShortlistedComponent,
    FontAwesomeModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-assignment';
}
