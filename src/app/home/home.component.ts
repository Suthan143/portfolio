import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent {
  name: string = 'Your Name';
  tagline: string = 'Frontend Developer | Angular Enthusiast 🚀';
  description: string = 'I build modern, responsive web applications with Angular, TypeScript, and SCSS.';
  resumeLink: string = 'assets/resume.pdf'; // Replace with your resume path or Google Drive link
}
