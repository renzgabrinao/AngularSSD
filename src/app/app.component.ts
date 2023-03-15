import { Component } from '@angular/core';

import { PROJECTS } from './data/projects';
import { CATEGORIES } from './data/categories';
import { TAGS } from './data/tags';

import { Tag } from './model/tag';
import { Project } from './model/project';
import { Category } from './model/category';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Portfolio with Angular';

  projects = PROJECTS;
  categories = CATEGORIES;
  tags = TAGS;

  tagFilter: Tag | undefined;
  categoryFilter: Category | undefined;

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
  }

  clearCategoryFilter() {
    this.categoryFilter = undefined;
  }

  clearTagFilter() {
    this.tagFilter = undefined;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}
