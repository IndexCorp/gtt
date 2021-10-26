import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public pages: any[] = [
   /* {title: 'Home', url: '/tabs/home', icon: 'home'},
    {title: 'Videos', url: '/videos', icon: 'videos'},
    {title: 'Audios', url: '/audios', icon: 'audio'},
    {title: 'course-page', url: '/course-page', icon: 'home'},
    {title: 'welcome', url: '/welcome', icon: 'home'},
    {title: 'login', url: '/login', icon: 'home'},
    {title: 'register', url: '/register', icon: 'person'},
   */ 
    {title: 'My Courses', url: '/tabs/home', icon: 'aperture'},
    {title: 'All Courses', url: '/tabs/courses', icon: 'apps'},
    {title: 'Videos', url: '/videos', icon: 'videocam'},
    {title: 'Audios', url: '/audios', icon: 'volume-high'},
    {title: 'Log Out', url: '/login', icon: 'log-out'},
    
 
  ]
  constructor() {}
  signOut() {
    console.log('signOut');
  }
}
