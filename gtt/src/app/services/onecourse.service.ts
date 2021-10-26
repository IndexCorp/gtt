import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse,HttpErrorResponse, HttpHeaders } from '@angular/common/http';


import { Course } from '../tab3/course.model';
import { map, catchError ,tap } from 'rxjs/operators';
import { throwError, observable, Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class OnecourseService {

  private url = "https://api.globaltradetutor.com/student.php";
 
  courses: Course[];

  constructor(private http: HttpClient,private router: Router) { }

  /*
 oneCourse(data: any){
  const token = localStorage.getItem('Token');


  const httpOptions = {
    headers: new HttpHeaders({
     'Content-Type':  'application/json',
     Authorization: 'Bearer ' + token
        
    })
  };
  return this.http.post(this.url, data).subscribe(console.log);
 }

*/
 
 getOneCourses(data: any): Observable<any>{
  const token = localStorage.getItem('Token');


/*    /*  headers: new HttpHeaders({
     'Content-Type':  'application/json',
     Authorization: 'Bearer ' + token
        
    })
  };*/
return this.http.post<any>(this.url, data).pipe(map(resdata =>{
   if(resdata.response.status == "100"){ 
    //console.log(resdata.response.result.course);
 
    return resdata.response.result;

   
  }
  
  }), );
 }


 
 getAudios(data: any): Observable<any>{
  
  return this.http.post<any>(this.url, data).pipe(map(resdata =>{
     if(resdata.response.status == "100"){ 
     
      return resdata.response.result.audios;
  
     
    }
    
    }), );
   }
   
 
   getVideos(data: any): Observable<any>{
    
    return this.http.post<any>(this.url, data).pipe(map(resdata =>{
       if(resdata.response.status == "100"){ 
       
        return resdata.response.result.videos;
    
       
      }
      
      }), );
     }

     getChats(data: any): Observable<any>{
    
      return this.http.post<any>(this.url, data).pipe(map(resdata =>{

        if(resdata.response.status == "100"){ 
         
          return resdata.response.result.chats;
      
         
        }else if(resdata.error.status != "100"){
          this.router.navigate(['/auth']);
        
         console.log('Token Expire');
        }
        
        
        }), );
       }
}
