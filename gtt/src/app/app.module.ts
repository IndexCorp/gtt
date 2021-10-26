import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tab4Pipe } from './tab4.pipe';
import { RegisterPipe } from './register.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { SlidesComponent } from './slides/slides.component';


//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';


@NgModule({
  declarations: [AppComponent, Tab4Pipe, RegisterPipe],
  entryComponents: [],
  imports: [BrowserModule,  FormsModule, ReactiveFormsModule,
    HttpClientModule,
IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
