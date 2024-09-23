import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  username: string = 'Username';
  creditsLeft: number = 300;
  userImage: string = 'images/user.jpg';
}
