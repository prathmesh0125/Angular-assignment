import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shortlisted',
  standalone: true,
  imports: [NgFor, CommonModule, RouterModule],
  templateUrl: './shortlisted.component.html',
  styleUrl: './shortlisted.component.css',
})
export class ShortlistedComponent {
  cvs = [
    {
      name: 'John Doe',
      title: 'UI UX Developer',
      description:
        'From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.',
      skills: 5,
      avatar: '/images/jon.jpg', // Adjusted the path to use Angular's assets folder
    },
    {
      name: 'John Doe',
      title: 'UI UX Developer',
      description:
        'From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.',
      skills: 5,
      avatar: '/images/user.jpg',
    },
    {
      name: 'John Doe',
      title: 'UI UX Developer',
      description:
        'From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.',
      skills: 5,
      avatar: '/images/jon.jpg',
    },
    {
      name: 'John Doe',
      title: 'UI UX Developer',
      description:
        'From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.',
      skills: 5,
      avatar: '/images/user.jpg',
    },
    {
      name: 'John Doe',
      title: 'UI UX Developer',
      description:
        'From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.',
      skills: 5,
      avatar: '/images/jon.jpg',
    },
    {
      name: 'John Doe',
      title: 'UI UX Developer',
      description:
        'From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.',
      skills: 5,
      avatar: '/images/user.jpg',
    },
  ];
}
