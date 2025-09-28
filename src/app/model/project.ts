export interface Project {
  role: string;
  company: string;
  duration: string;
  title: string;
  description: string[];   // list of points
  frontend: string;
  backend: string;
  database: string;
  deployment: string;
  architecture: string;
  versionControl: string;
  security: string;
  skills: string[];        // badges/skills
  link?: string;           // optional
}
