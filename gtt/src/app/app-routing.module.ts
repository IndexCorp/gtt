import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  {
    path: '',    
    canActivate: [AuthguardService],
   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }, {
    path: 'tabs',
   // loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
  path: 'home',
   // loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'videos/:id',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'course-page/:id',
    loadChildren: () => import('./course-page/course-page.module').then( m => m.CoursePagePageModule)
  },
  {
    path: 'audios/:id',
    loadChildren: () => import('./audios/audios.module').then( m => m.AudiosPageModule)
  },
  {
    path: 'chat/:id',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'chat-menu',
    loadChildren: () => import('./chat-menu/chat-menu.module').then( m => m.ChatMenuPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule)
  },
  {
    path: 'all-courses',
    loadChildren: () => import('./all-courses/all-courses.module').then( m => m.AllCoursesPageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./forget/forget.module').then( m => m.ForgetPageModule)
  },
  /*{
    path: 'auth-guard',
    loadChildren: () => import('./services/auth-guard/auth-guard.module').then( m => m.AuthGuardPageModule)
  }*/
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
