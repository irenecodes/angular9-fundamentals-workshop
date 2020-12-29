import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

const BASE_URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private model = 'courses';
  
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
    return this.http.get(this.getUrlById(courseId))
  }

  create(course){
    console.log('create course', course);

    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    return this.http.put(this.getUrlById(course.id), course)
  }
  delete(courseId){
    return this.http.delete(this.getUrlById(courseId))
  }

  private getUrl () {
    return `${BASE_URL}${this.model}`
  }

  private getUrlById(id){
    return `${this.getUrl()}/${id}`
  }
}
