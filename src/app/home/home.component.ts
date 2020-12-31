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
  // Step 1: Create a LessonsList component
  // Step 2: Create  appropriate inputs and outputs
  // Step 3: Render LessonsLists component


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
