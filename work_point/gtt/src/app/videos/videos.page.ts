import { Component, ElementRef,OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import data from './../../assets/feed.json';

import { OnecourseService } from '../services/onecourse.service';
import { VideosService } from '../services/videos.service';
//import { Course } from '../course.model';



@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  courses;
feed; 
datags;
datagv;
myCourse;

@ViewChildren('player')videoPlayer: QueryList<any>;
currentPlaying = null;

stickyVideo: HTMLVideoElement = null;
stickyPlaying = false;
@ViewChild('stickyplayer', {static:  false }) stickyPlayer: ElementRef;
  coursesService: any;




  constructor(private renderer: Renderer2, private vid: VideosService, private onec: OnecourseService, private route:ActivatedRoute ) { }




  didScroll(){
    if(this.currentPlaying && this.isElementInViewport(this.currentPlaying)){
      return;
    }else if(this.currentPlaying && !this.isElementInViewport(this.currentPlaying)) {
      //Item is out of view, pause it
      this.currentPlaying.pause();
      this.currentPlaying = null;
    }

    this.videoPlayer.forEach(player => {
      console.log('player: ', player);

      if(this.currentPlaying){
        return;
      }

      const nativeElement = player.nativeElement;
      const inView = this.isElementInViewport(nativeElement);

        if(this.stickyVideo && this.stickyVideo.src == nativeElement.src){
          return;
        }
      if(inView){
        this.currentPlaying = nativeElement;
        this.currentPlaying.muted = true;
        this.currentPlaying.play();
      }
    });
  }

  openFullscreen(elem) {
    if(elem.requestFullscreen){
      elem.requestFullscreen();

    }else if(elem.webkitEnterfullscreen){
      elem.webkitEnterfullscreen();
      elem.webkitEnterfullscreen();
    }
  }

  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return(
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  playOnSide(elem) {
    if(this.stickyVideo){
      this.renderer.removeChild(this.stickyPlayer.nativeElement, this.stickyVideo);
    }
    this.stickyVideo = elem.cloneNode(true);
    this.renderer.appendChild(this.stickyPlayer.nativeElement, this.stickyVideo);

    if(this.currentPlaying){
      const playPosition = this.currentPlaying.currentTime;
      this.currentPlaying.pause();
      this.currentPlaying = null;
      this.stickyVideo.currentTime = playPosition;
    }

    this.stickyVideo.muted = false;
    this.stickyVideo.play();
    this.stickyPlaying = true;
  }

closeSticky() {
  if(this.stickyVideo){
    this.renderer.removeChild(this.stickyPlayer.nativeElement, this.stickyVideo);
    this.stickyVideo = null;
    this.stickyPlaying = false;
  }
}

playOrPauseSticky(){
  if(this.stickyPlaying){
    this.stickyVideo.pause();
    this.stickyPlaying = false;

  }else{
    this.stickyVideo.play();
    this.stickyPlaying = true;
  }
}




  


ngOnInit() {
  this.route.paramMap.subscribe(paramMap => {

    
    if (!paramMap.has('id')){
      return
    }
    const course_id = paramMap.get('id');
    const datags = {
      "name": "getCourseDetails",
      "param": {
        "token" : localStorage.getItem('token'),
        "course_id" : course_id
      } 
    };

    const dataV = {
      "name": "getVideos",
      "param": {
        "token" : localStorage.getItem('token'),
        "course_id" : course_id
      } 
    };

     this.onec.getOneCourses(datags).subscribe((dats)=>{

      this.courses = Array.from(Object.keys(dats), k=>dats[k]);
    //console.log(this.courses);


     //getAudios
    });
    
    

    this.onec.getVideos(dataV).subscribe((dats)=>{

      this.feed = Array.from(Object.keys(dats), k=>dats[k]);
     //console.log(this.feed);


     
    });
        
  });

 
 
}


}
