import { HttpClient, HttpHeaderResponse,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, catchError ,tap } from 'rxjs/operators';
import { throwError, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllCoursesService {
  errorData: {};
  fecthData: {};
  isActive = false;


  
  private url = "https://api.globaltradetutor.com/student.php";
 
  constructor(private http: HttpClient) { }

  allCourses(data: any){
    const token = localStorage.getItem('Token');


    const httpOptions = {
      headers: new HttpHeaders({
       'Content-Type':  'application/json',
       Authorization: 'Bearer ' + token
          
      })
    };
  }


   // const token = localStorage.getItem('Token');

  /*  const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token

    });
    */

  // console.log(token);
 //  console.log(headers);
  //  returnthis.http.post(this.url, data, { headers }).subscribe(console.log);
/*
  return this.http.post<any>(this.url,data, httpOptions).pipe(map(resdata =>{
    console.log(resdata);
    if(resdata.response.status == "100"){
     this.isActive = true;
         localStorage.setItem('token', resdata.response.result.token);
       
      

   
  }
  
  }),
  catchError(this.handleError));
  }

    
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
