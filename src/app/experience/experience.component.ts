import { Component } from '@angular/core';
import { Experience } from '../model/experience';

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Full Stack Developer',
      company: 'Knila IT Solution Pvt Ltd',
      link: '/',
      location: 'Coimbatore, India',
      duration: 'Mar 2024 — Present',
      current: true
    }
  ];
}
