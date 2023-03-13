import { Pipe, PipeTransform } from '@angular/core';
import { Tag } from './model/tag';
import { Project } from './model/project';

@Pipe({
  name: 'projectFilter',
})
export class ProjectFilterPipe implements PipeTransform {
  // The transform method will receive our array of Projects and return only those that contain our Tag if defined
  transform(projects: Project[], tag: Tag | undefined): Project[] {
    let filteredProjects = [];
    if (tag) {
      filteredProjects = projects.filter((project) => {
        // Convert the project tags as well as the tag to strings
        // Since indexOf returns -1 if not found, add 1 to make not found a falsy value
        return JSON.stringify(project.tags).indexOf(JSON.stringify(tag)) + 1;
      });
    } else {
      filteredProjects = projects;
    }
    return filteredProjects;
  }
}