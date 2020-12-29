import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

const BASE_URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private model = 'courses';
  private courses = [
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
  constructor(private http: HttpClient) { }

  // CRUD 
  // read = all or find 
  all(){
    // locally from here 
    // return this.courses

    // using a mock API endpoint - make a http call and return an observable: like a promise but gets many values 
    return this.http.get(this.getUrl())
  }
  find(courseId){
  }

  create(course){
    console.log('create course', course);

    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    console.log('update course', course);
  }
  delete(courseId){
    console.log('delete course', courseId);
  }

  private getUrl () {
    return `${BASE_URL}${this.model}`
  }
}
