// src/app/services/projects.service.ts
import { Injectable } from '@angular/core';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  getProjects(): Project[] {
    return [
      {
        role: 'Senior Developer',
        company: 'Knila IT Solution Pvt Ltd - Coimbatore',
        duration: 'Mar 2024 · Present',
        title: 'Merchant Payment Module',
        description: [
          'A secure and scalable payment management system for handling transactions, billing, and tracking.',
          'Supports multiple payment modes like credit cards, bank transfers, and wallets.',
          'Provides audit trails, reporting features, and compliance tools.'
        ],
        frontend: 'Angular | React',
        backend: '.NET Core (Gateway API)',
        database: 'Microsoft SQL Server',
        deployment: 'IIS / Cloud-based',
        architecture: 'Microservices API, Dapper ORM',
        versionControl: 'Bitbucket',
        security: 'JWT Authentication, Okta, SSL/TLS Encryption',
        skills: [
          'Angular', '.NET Core', 'MS SQL', 'GraphQL',
          'Agile Development', 'Postman', 'Jira'
        ],
        link: 'https://www.deluxe.com/'
      }
    ];
  }
}
