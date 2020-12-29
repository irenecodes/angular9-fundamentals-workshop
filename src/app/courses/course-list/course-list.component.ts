import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent  {
  @Input() courses;

  // instantiate new emitter - add this to the html then handle this in the parent courses component html
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();



}
