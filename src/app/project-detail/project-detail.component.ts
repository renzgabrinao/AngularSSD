import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectService } from '../project.service';

import { Project } from '../model/project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) {}
  // @Input() project?: Project;
  project?: Project;
  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    const slug = String(this.route.snapshot.paramMap.get('slug'));
    this.projectService
      .getProject(slug)
      .subscribe((project) => (this.project = project));
  }

  goBack(): void {
    this.location.back();
  }
}