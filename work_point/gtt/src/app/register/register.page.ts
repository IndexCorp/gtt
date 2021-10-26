import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {


  constructor(
    private router: Router,
    private reg: RegisterService,
    private alertCtrl: AlertController,
    private toastCtrt: ToastController,
    private loadingCtrl: LoadingController
   
  ) { }
form = new FormGroup({
  firstname: new FormControl('', [Validators.required, Validators.minLength(5)]),
  surname: new FormControl('', [Validators.required, Validators.minLength(5)]),
  tel: new FormControl('', [Validators.required, Validators.minLength(5)]),
  email: new FormControl('', [Validators.required, Validators.minLength(5)]),
  password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  confirm_password: new FormControl('', [Validators.required, Validators.minLength(5)]),
});



      


async onSubmit() {
 
 
  const loading = await this.loadingCtrl.create({message: 'Creating.....'});
  await loading.present();

              
const datags = {
  "name":"register",
"param":{
      "firstname": this.form.value.firstname,
    "lastname": this.form.value.surname,  
    "email": this.form.value.email,
    "password": this.form.value.password,
    "phone": this.form.value.tel
    }
};

//console.log(datags);
//console.log(JSON.stringify(datags));

//this.reg.register(JSON.stringify(datags)).subscribe(console.log);
this.reg.register(datags).subscribe(
  //If Success

  async() => {
    const toast = await this.toastCtrt.create({ message: 'User Created', duration: 2000, color: 'dark'});
    await toast.present();
    this.router.navigateByUrl('/login');
    loading.dismiss();
    this.form.reset();
  },

  //If Error 
  async ()=> {
    const alert = await this.alertCtrl.create({message: 'Error Saving Data.', buttons: ['OK'] });
    await alert.present();
  
  }
);
}


ngOnInit() {
}



}
