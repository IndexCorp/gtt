import { Component } from '@angular/core';
import { map, catchError ,tap } from 'rxjs/operators';
import { throwError, observable } from 'rxjs';
import { CourseService } from '../services/course.service';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Courses } from '../model/course.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  errorData: [];
  public courses = [];
  public courses1 = [];
   datags = {
    "name": "getUserCourses",
    "param": {
      "token" : localStorage.getItem('token')
    } 
    };
    
  //courses: Course[];
  
  constructor(private coursesService: CourseService) {}

  ngOnInit(){
    
     this.coursesService.getCourses(this.datags).subscribe((data)=>{
       this.courses = Array.from(Object.keys(data), k=>data[k]);
       
      // console.log(this.courses);
      // console.log(this.courses1);
     });
    
  //this.coursesService.getCourses(this.datags).subscribe(console.log);
  //console.log(this.datags);
  }

  /*
  private handleError(error: HttpErrorResponse) {
    let errCaught: boolean;
    if (error.error instanceof ErrorEvent) {
      errCaught = true;
      // A client-side or network error occurred. Handle it accordingly.
      this.errorData = {
        errorTitle: 'Oops! Registration failed.',
        errorDesc: 'Kindly check your network connection.'
      };
      // console.error('An error occurred:', error.error.message);
    } else {
      errCaught = true;
      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

     // console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
      this.errorData = {
        errorTitle: 'Oops! Login failed.',
        errorDesc: 'Invalid Login Details Try Again.'
      };
    }

    // return an observable with a user-facing error message
    if (!errCaught) {
      this.errorData = {
        errorTitle: 'Oops! Login failed.',
        errorDesc: 'Something went wrong.'
      };
    }
   console.log(this.errorData);
    return throwError(this.errorData);
   
  }
  */
}
