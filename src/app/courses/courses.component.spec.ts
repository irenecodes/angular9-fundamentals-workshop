import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import {CoursesService} from '../shared/services/courses.service'
import { DebugElement } from '@angular/core';

// 1. create a stub 
const coursesServiceStub = {
  all: () => {
    return {
      subscribe: () => {
        
      }
    }
  },
  delete: () => {
    return {
      subscribe: () => {
        
      }
    }
  }
}

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  // 2. 
  let de: DebugElement;

  // 1.
  let coursesService: CoursesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesComponent ],
      // imports: [HttpClientModule]
      providers: [{provide: CoursesService, useValue: coursesServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    // 3 
    de = fixture.debugElement;
    coursesService = de.injector.get(CoursesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call coursesService.delete on delete', () => {
    spyOn(coursesService, 'delete').and.callThrough();
    component.deleteCourse(1);
    expect(coursesService.delete).toHaveBeenCalledWith(1);
  }) 

});
