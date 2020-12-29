import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Hello Workshop';
  currentLesson = null;

  // Challenge 
  // Step 1: Create a LessonsService
  // hint: ng g s shared/services/lessons 
  // Step 2: Add lessons service to app.module
  // Step 3: Inject lessons service into component 
  // Step 4: Move lessons to service and consume in component 

  courseLessons = null;

  
  constructor(private LessonsService: LessonsService) { }

  ngOnInit(): void {
    this.courseLessons = this.LessonsService.all()
  }

  selectLesson(lesson) {
    console.log(lesson);
    
    this.currentLesson = lesson;
  }
}
