import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private categoryService: CategoryService) {}

  @Input() categoryFilter: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();

  categories: Category[] = [];
  getCategories(): void {
    this.categories = this.categoryService.getCategories();
  }

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.newCategoryFilterEvent.emit(category);
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
