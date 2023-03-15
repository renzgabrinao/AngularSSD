import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../model/project';
import { Category } from '../model/category';
import { Tag } from '../model/tag';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  @Input() categoryFilter: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  @Input() tagFilter: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.newCategoryFilterEvent.emit(category);
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    this.newTagFilterEvent.emit(tag);
  }

  clearCategoryFilter() {
    this.categoryFilter = undefined;
  }

  clearTagFilter() {
    this.tagFilter = undefined;
  }

  projects: Project[] = [];

  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }

  getProjectsByCategory(): void {
    const slug = String(this.route.snapshot.paramMap.get('slug'));
    this.projectService
      .getProjectsByCategory(slug)
      .subscribe((projects) => (this.projects = projects));
  }

  getProjectsByTag(): void {
    const slug = String(this.route.snapshot.paramMap.get('slug'));
    this.projectService
      .getProjectsByTag(slug)
      .subscribe((projects) => (this.projects = projects));
  }

  selectedProject?: Project;
  onSelect(project: Project): void {
    this.selectedProject = project;
  }

  clearSelectedProject(): void {
    this.selectedProject = undefined;
  }

  dropdownState =  false;

  clickFilter() {
    this.dropdownState = !this.dropdownState;
  }

  ngOnInit(): void {
    const segment: string = this.route.snapshot.url[1]?.path;

    if (segment === 'categories') {
      this.getProjectsByCategory();
    } else if (segment === 'tags') {
      this.getProjectsByTag();
    } else {
      this.getProjects();
    }
  }
}
