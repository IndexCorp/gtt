import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController, MenuController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, throwError, from } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';

import { AuthModel } from './auth.model';

import { LoadingController } from '@ionic/angular';
//import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public password :string;
 public email :string;
    token: string;
 

    constructor(private router: Router,
      public navCont: NavController,
      private loadingCtrl: LoadingController,
       private menuCon: MenuController, private http: HttpClient,
       private authServices: AuthService, private alert: AlertController) { 
     this.menuCon.enable(false, 'main-menu');}

  ngOnInit() {
  }



  onSubmit(form: NgForm){
   
    //console.log(form);
 
    if(!form.valid){
     // this.isLoading = true;
      return;
    }else{

      this.email = form.value.user_name;
      this.password = form.value.phone_no;
     
      //const datas = "{user_name:"+this.user_name+",phone_no:"+this.phone_no+",email:"+this.email+",level:"+this.level+",license_key:"+this.license_key+",system_id:"+this.system_id+",remarks:"+ this.remarks+"}";
      const datas =
      '{"user_name":"generateToken",'
      +'"param" :'+'{'
      +'"email": "'+this.email+'",'
      +'"level": "'+this.password+'",'
      +'}'
       +'}';
     
      //const datasR = JSON.stringify(datas);
      
     // this.isLoading = false;
     // this.loadingCtrl.create({ keyboardClose: true, message: 'Loading in...'}).then(loadingEl => {
      //loadingEl.present();
    
        setTimeout(() => {
          //this.isLoading = false;
       //   loadingEl.dismiss();
    
       this.authServices.activate(datas).subscribe(() => {
       // console.log(resdata)
       // if (this.authServices.isActive == true) {
         console.log('Activation SuccessFull');
         // localStorage.setItem('token', this.user_name);
        //  localStorage.setItem('currentEmail', this.email);


         // this.username = localStorage.getItem('currentUserName');

          //this.emails = localStorage.getItem('currentEmail');

       //   this.menuCon.enable(true, 'main-menu');
     
         // this.router.navigateByUrl('/home');

//        }else{
        //  this.loginFailed= true;
          // this.presentAlert();
         
      //  }
           });
         // this.router.navigateByUrl('/home');
        }, 1500);
      
      
      }
     
      
   
 
  }

}
