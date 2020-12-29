import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // HTTP Client Exercise 
  // Step 1: Complete remote update call 
  // Step 2: Complete remote delete call 
  // Step 3: Fix UI on completed operation 

  currentCourse = null;
  
  courses = null;
  // dependency injection happens at constructor as a parameter
  // when working with TS, when set a private modifier, assigns that to a member of that class 
  constructor(private coursesService: CoursesService) { }

  // want ngOnInit because when put logic in a constructor, it fires immediately. ngOnInit fires when component is initialized 
  ngOnInit(): void {
    // setting to empty course to initialize 
    this.resetSelectedCourse()
    // resolve this promise 
    // this.coursesService.all().subscribe(courses => this.courses = courses)
    this.loadCourses()
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

  loadCourses() {
    this.coursesService.all().subscribe(courses => this.courses = courses)
  }

  // create a composition method 
  refreshCourses() {
    this.resetSelectedCourse();
    this.loadCourses()
  }



  saveCourse(course){
    if(course.id){
      this.coursesService.update(course).subscribe(result => this.refreshCourses())
    } else {
      
      // this.coursesService.create(course).subscribe(result => console.log('course created', result))
      this.coursesService.create(course).subscribe(result => this.refreshCourses())
    }
    
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId).subscribe(result => this.refreshCourses())
    
  }

  
  cancel(){
    this.resetSelectedCourse()
  }

}
