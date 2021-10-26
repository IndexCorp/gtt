import { Component, OnInit } from '@angular/core';

import { OnecourseService } from '../services/onecourse.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Course } from '../tab3/course.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  errorData: [];
   courses;

  constructor(private route:ActivatedRoute, private course: OnecourseService) { }
  
  

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {

    
        if (!paramMap.has('id')){
          return
        }
        const course_id = paramMap.get('id');
        const datags = {
          "name": "getChats",
          "param": {
            "token" : localStorage.getItem('token'),
            "course_id" : course_id
          } 
        };
   //    this.courses = this.course.getOneCourses(datags);
     //  console.log(this.courses);
      // console.log(this.course.getOneCourses(datags));
         this.course.getChats(datags).subscribe((dats)=>{

          this.courses = Array.from(Object.keys(dats), k=>dats[k]);
         console.log(this.courses);
         console.log('ji');
        }); 
            
      });
    
// console.log(this.courses);

 
  }

}
