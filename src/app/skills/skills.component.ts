import { Component } from '@angular/core';
import { SkillsCategory } from '../model/skillsCategory';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  categories: SkillsCategory[] =[
    {
      title: 'Frontend',
      icon: 'bi-code-slash',
      color: 'text-primary',
      skills: ['HTML/CSS', 'Bootstrap','jQuery', 'JavaScript', 'TypeScript', 'Angular (10+)']
    },
    {
      title: 'Backend',
      icon: 'bi-hdd-network',
      color: 'text-success',
      skills: ['Node.js', '.NET Core', 'Web API', 'REST API', 'Dapper']
    },
    {
      title: 'Databases',
      icon: 'bi-database',
      color: 'text-warning',
      skills: ['SQL']
    },
    {
      title: 'Cloud',
      icon: 'bi-cloud',
      color: 'text-info',
      skills: ['Azure']
    },
    {
      title: 'Tools & Workflow',
      icon: 'bi-tools',
      color: 'text-secondary',
      skills: ['Git', 'Postman', 'Jira']
    },
    {
      title: 'Soft Skills',
      icon: 'bi-lightbulb',
      color: 'text-danger',
      skills: ['Problem-solving', 'Software Debugging', 'Solutions Implementation']
    }
  ];
}
