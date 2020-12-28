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

  // want ngOnInit because when put logic in a constructor, it fires immediately. ngOnInit fires when component is initialized 
  ngOnInit(): void {
    // setting to empty course to initialize 
    this.resetSelectedCourse()
  }

  resetSelectedCourse(){
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    }
    this.currentCourse = emptyCourse
  }
  

  selectCourse(course) {
    console.log(course);
    
    this.currentCourse = course;
  }

  saveCourse(){
    console.log('save course');
    
  }

  deleteCourse(courseId) {
    console.log(courseId);
    
  }

  
  cancel(){
    this.resetSelectedCourse()
  }

}
