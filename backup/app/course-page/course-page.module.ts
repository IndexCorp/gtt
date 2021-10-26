import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursePagePageRoutingModule } from './course-page-routing.module';

import { CoursePagePage } from './course-page.page';
import { SharedComponentsModule } from '../shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursePagePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CoursePagePage]
})
export class CoursePagePageModule {}
