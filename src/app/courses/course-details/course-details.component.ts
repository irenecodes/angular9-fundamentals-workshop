import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent  {
  selectedCourse;
  originalTitle;
  
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set course(value) {
    if (value) {
      // create a clone of the course object we send in 
      this.selectedCourse = Object.assign({}, value);
      this.originalTitle = value.title;
    }
  };


}
