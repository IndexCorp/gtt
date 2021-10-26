import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      
    /*  {
        path: 'tab',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },*/
      {
        path: 'home',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'courses',
        loadChildren: () => import('../courses/courses.module').then( m => m.CoursesPageModule)
      },
      {
        path: 'videos/:id',
        loadChildren: () => import('../videos/videos.module').then( m => m.VideosPageModule)
      },
      {
        path: 'course-page/:id',
        loadChildren: () => import('../course-page/course-page.module').then( m => m.CoursePagePageModule)
      },
      {
        path: 'audios/:id',
        loadChildren: () => import('../audios/audios.module').then( m => m.AudiosPageModule)
      },
      {
        path: 'result',
        loadChildren: () => import('../result/result.module').then( m => m.ResultPageModule)
      },
      {
        path: 'all-courses',
        loadChildren: () => import('../all-courses/all-courses.module').then( m => m.AllCoursesPageModule)
      },
      
      
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/courses',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
