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
 
    isLoading = false;

    constructor(private router: Router,
      public navCont: NavController,
      private loadingCtrl: LoadingController,
       private menuCon: MenuController, private http: HttpClient,
       private authServices: AuthService, private alert: AlertController) { 

     this.menuCon.enable(false, 'main-menu');
    }

  ngOnInit() {
  }


  async presentAlert(){
    let alerts = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Login Successfull !',
      message: 'Login Successfully have a good time with the App',
      buttons: ['OK']
     
    });
    await alerts.present();
  }



  async presentAlertF(){
    let alerts = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Login Failed !',
      message: 'Login Failed Please provide Correct Email and Password',
      buttons: ['OK']
     
    });
    await alerts.present();
  }


  onSubmit(form: NgForm){
   // console.log(localStorage.getItem('myToken'));
    
    //console.log(form);
 
          if(!form.valid){
            this.isLoading = true;
            return;
          }else{

              this.email = form.value.email;
              this.password = form.value.password;
            
                  
                      const datags = {
                        "name":"generateToken",
                        "param":{
                            "email": this.email,
                            "pass": this.password
                        }
                      };
        
                      this.loadingCtrl.create({ keyboardClose: true, message: 'Loading in...'}).then(loadingEl => {
                      loadingEl.present();
                    
                            setTimeout(() => {
                              this.isLoading = false;
                            loadingEl.dismiss();
                        
                            
                              this.authServices.activate(datags).subscribe(() => {
                                if (this.authServices.isActive == true) {
                                  this.presentAlert();
                                  this.router.navigateByUrl('/tabs');
                                }else{
                                  this.presentAlertF();
                                 
                                }
                              });
                            
                            }, 1500);
                          
                      
                      });
            
                    }
  } 
 
  
}