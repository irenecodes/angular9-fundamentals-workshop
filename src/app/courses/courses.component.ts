import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

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
  
  courses = null;
  // dependency injection happens at constructor as a parameter
  // when working with TS, when set a private modifier, assigns that to a member of that class 
  constructor(private coursesService: CoursesService) { }

  // want ngOnInit because when put logic in a constructor, it fires immediately. ngOnInit fires when component is initialized 
  ngOnInit(): void {
    // setting to empty course to initialize 
    this.resetSelectedCourse()

    this.courses = this.coursesService.all()
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

  saveCourse(course){
    if(course.id){
      this.coursesService.update(course)
    } else {
      this.coursesService.create(course)
    }
    
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId)
    
  }

  
  cancel(){
    this.resetSelectedCourse()
  }

}
