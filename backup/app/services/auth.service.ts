import { Injectable } from '@angular/core';
import { AuthModel } from '../login/auth.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError ,tap } from 'rxjs/operators';
import { throwError, Observable, BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


const helper = new JwtHelperService();
const TOKEN_KEY ='jwt-token';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user:Observable<any>;
  private userData = new BehaviorSubject(null);

    constructor( private http: HttpClient, private storage: Storage, private plt: Platform, private router: Router) { }
  

    
 



   }
