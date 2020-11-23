import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // 1. display courses using ngFor 
  // 2. Add event handler to select course 
  // 3. Display raw json of selected course 
  currentCourse = null;
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JS',
      description: 'Hello JS',
      percentComplete: 50,
      favorite: true
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course) {
    console.log(course);
    
    this.currentCourse = course;
  }

  deleteCourse(courseId) {
    console.log(courseId);
    
  }

}
