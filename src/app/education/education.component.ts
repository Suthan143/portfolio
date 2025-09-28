import { Component } from '@angular/core';
import { Education } from '../model/education';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationList: Education[] = [
    {
      degree: 'B.E. Electrical and Electronics Engineering',
      university: 'Government College of Technology',
      link: 'https://gct.ac.in/',
      duration: '2016 — 2020',
      location: 'Coimbatore, India'
    }
  ];

}
