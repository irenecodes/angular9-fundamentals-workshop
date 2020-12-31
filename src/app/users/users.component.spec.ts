import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  // 2. after creating a module, need to create a fixture. a fixture creates an instance of the component to test. 
  let fixture: ComponentFixture<UsersComponent>;

  // 1. TestBed is the context or mechanism responsible for creating the environemnt for the test to run. The most important piece when testing Ng components. 
  beforeEach(async(() => {
    // configureTestingModule gives you opportunity to create a very specific module to run or test your component in. Want to run in beforeEach and set up Ng module for your component or service to live in so you can test it. 
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ]
    })
    // 3. compile components 
    .compileComponents();
  }));

  beforeEach(() => {
    // 4. fixture returns testbed of userscomponent 
    fixture = TestBed.createComponent(UsersComponent);
    // 5. return component by calling this fixture.componentInstance 
    component = fixture.componentInstance;
    // 6. can then test 
    fixture.detectChanges();
  });

  it('should have the correct title', ()=> {
    expect(component.title).toBe('hi there!');
  })

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
