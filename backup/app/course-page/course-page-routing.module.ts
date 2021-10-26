import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursePagePage } from './course-page.page';

const routes: Routes = [
  {
    path: '',
    component: CoursePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursePagePageRoutingModule {}
