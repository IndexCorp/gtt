import { Injectable } from '@angular/core';
import { Course } from '../tab3/course.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError ,tap } from 'rxjs/operators';
import { throwError, observable, Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class CourseService {
  errorData: {};
  
private url = "https://api.globaltradetutor.com/student.php";
 
courses: Course[];

/*
  courses: Course[] = [
    {
      id: '1',
      title: 'Basic Agriculture',
      img: '/assets/course-1-img.jpg',
      class: 'Basic 1',
      classId: '1',
      bookLink: '../../assets/books/1/agric-1.pdf'

    }, {
      id: '2',
      title: 'Basic Agriculture',
      img: '/assets/course-1-img.jpg',
      class: 'Basic 1',
      classId: '1',
      bookLink: '../../assets/books/1/agric-1.pdf'

    }, {
      id: '3',
      title: 'Basic Agriculture',
      img: '/assets/course-1-img.jpg',
      class: 'Basic 1',
      classId: '1',
      bookLink: '../../assets/books/1/agric-1.pdf'

    },
  ]
  */
  constructor(private http: HttpClient,private router: Router) { }

  getCourses(data: any): Observable<any>{
    const token = localStorage.getItem('Token');


  return this.http.post<any>(this.url, data).pipe(map(resdata =>{
    
     if(resdata.response.status == "100"){ 
          
     return this.courses = resdata.response.result.courses;
 
     
    }else if(resdata.error.status != "100"){
      this.router.navigate(['/auth']);
     console.log('Token Expire');
    }
    
    }), );
   }

   getResults(data: any): Observable<any>{
    //const token = localStorage.getItem('Token');


  return this.http.post<any>(this.url, data).pipe(map(resdata =>{
    
     if(resdata.response.status == "100"){ 
          
     return this.courses = resdata.response.result.results;
 
     
    }else if(resdata.error.status != "100"){
      this.router.navigate(['/auth']);
    
     console.log('Token Expire');
    }
    
    }), );
   }
   // return [...this.courses];
  


     
  /*activate(data: any){

  }  */
}
