import { Component, OnInit } from '@angular/core';
import { AllCoursesService } from '../services/all-courses.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 
   datags ={
    "name": "allCourses",
    "param": {
    } 
    };
    
    slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(
    private allc: AllCoursesService
   
  ) {}

  
ngOnInit() {
 // console.log(localStorage.getItem('Token'));
  this.allc.allCourses(this.datags);   
 
}


}
  