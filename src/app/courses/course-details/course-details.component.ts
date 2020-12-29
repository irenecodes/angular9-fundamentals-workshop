import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  @Input() course;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
