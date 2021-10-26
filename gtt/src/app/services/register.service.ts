import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
private url = "https://api.globaltradetutor.com/student.php";
  constructor(private http: HttpClient) { }

  register(data: any){
    return this.http.post<any>(`${this.url}`, data);
  }
}
