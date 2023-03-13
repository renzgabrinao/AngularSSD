import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TagService } from '../tag.service';
import { Tag } from '../model/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  constructor(private tagService: TagService) {}

  @Input() tagFilter: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();

  tags: Tag[] = [];
  getTags(): void {
    this.tags = this.tagService.getTags();
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    this.newTagFilterEvent.emit(tag);
  }

  ngOnInit(): void {
    this.getTags();
  }

}
