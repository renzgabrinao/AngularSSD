import { Injectable } from '@angular/core';
import { PROJECTS } from './data/projects';
import { Project } from './model/project';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    return projects;
  }
  
  getProject(slug: string): Observable<Project> {
    const project = PROJECTS.find((p) => p.slug === slug)!;
    return of(project);
  }

  getProjectsByCategory(slug: string): Observable<Project[]> {
    const projects = PROJECTS.filter((p) => p.category?.slug === slug)!;
    console.log(projects)
    return of(projects);
  }

  getProjectsByTag(slug: string): Observable<Project[]> {
    const projects = PROJECTS.filter((p) => {
      if (p.tags.some((t) => t.slug === slug)) {
        return true;
      } else {
        return false;
      }
    })!;
    return of(projects);
  }
}
