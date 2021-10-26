import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange } from "@ionic/angular";

import { Router,ActivatedRoute, ParamMap } from '@angular/router';

import { OnecourseService } from '../services/onecourse.service';
import { AudiosService } from '../services/audios.service';
@Component({
  selector: 'app-audios',
  templateUrl: './audios.page.html',
  styleUrls: ['./audios.page.scss'],
})
export class AudiosPage implements OnInit {
@ViewChild("range", { static: false }) range: IonRange;


public audios = [];
datagsx;
datags;
myCourse;
courses;
songs;
/* 
songs = [
  {
    title: "Oyo State Antem",
    subtitle: "Development of Oyo State",
    img: "/assets/course-4-img.jpg",
    path: "/assets/anthem.mp3"
  },
  {
    title: "Olu Gbenga Adeboye ",
    subtitle: "Stand Up Comedian Gbenga Adeboye",
    img: "/assets/course-1-img.jpg",
    path: "/assets/gbenga.mp3"
  },
  {
    title: "Odolaye Aremu",
    subtitle: "Apala Music by Odulaya Aremu",
    img: "/assets/course-5-img.jpg",
    path: "/assets/odolaye.mp3"
  },
];
*/
//Current Song Details
currTitle;
currSubtitle;
currImage;

//Progress bar value
progress = 0;

//Toggle for ion-range touch
isTouched = false;

//Track of ion-range touch
isPlaying = false;

//ion range texts
currSecsText;
durationText;

//ion range texts
currRangeTime;
//durationText;


//ion range value
cu//rrRangeTime;
maxRangeValue;

//Current Song
currSong: HTMLAudioElement;

//Upnext Song Details
imgLogo = 'https://globaltradetutor.com/admin/';
upNextImg;
upNextTitle;
upNextSubtitle;



  constructor(private router: Router,  private aud: AudiosService, private onec: OnecourseService, private route:ActivatedRoute ) { }

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

      const datagA = {
        "name": "getAudios",
        "param": {
          "token" : localStorage.getItem('token'),
          "course_id" : course_id
        } 
      };

       this.onec.getOneCourses(datags).subscribe((dats)=>{

        this.courses = Array.from(Object.keys(dats), k=>dats[k]);
      // console.log(this.courses);


       //getAudios
      });
      
      

      this.onec.getAudios(datagA).subscribe((dats)=>{

        this.songs = Array.from(Object.keys(dats), k=>dats[k]);
       // console.log(this.songs);


       
      });
          
    });
  
   
  }
  
  

  playSong(title, subtitle, img, song) {
    //If a song plays, stop that

    if(this.currSong !=null){
      this.currSong.pause();
    }

    //Open full player view
    document.getElementById("fullPlayer").style.bottom = "0px";
    //set current song details
    this.currTitle = title;
    this.currSubtitle = title;
    this.currImage = 'https://globaltradetutor.com/admin/'+img;

    //Current song audio
    this.currSong = new Audio(song);

    this.currSong.play().then(()=> {
      
      //Total Song duration
      this.durationText = this.sToTime(this.currSong.duration);

      //set max rane value (important to show progress in ion-range)
      this.maxRangeValue = Number(this.currSong.duration.toFixed(2).toString().substring(0,5));

      //set upnext song
      //get Current song index
      var index = this.songs.findIndex(x=>x.title == this.currTitle);
      //if current song is the last one then set first song info for upnext song

      if((index + 1) == this.songs.length) {
        this.upNextImg = this.songs[0].imgLogo+img;
        this.upNextTitle = this.songs[0].title;
        this.upNextSubtitle = this.songs[0].subtitle;

      }

      //else set next song info for upnext song
      else{
        this.upNextImg = this.songs[index + 1].imgLogo+img;
        this.upNextTitle = this.songs[index + 1].title;
        this.upNextSubtitle = this.songs[index + 1].subtitle;

      }
      this.isPlaying = true;

    })
    this.currSong.addEventListener("timeupdate", () => {
      //update some infos as song plays on

      //if ion-range not touched the do update
      if(!this.isTouched){

        //update ion-range value
        this.currRangeTime = Number(this.currSong.currentTime.toFixed(2).toString().substring(0,5));

        //update current seconds text
        this.currSecsText = this.sToTime(this.currSong.currentTime);
        //update progress bar (in minimize view)
        this.progress = (Math.floor(this.currSong.currentTime) / Math.floor(this.currSong.duration));

        //If song ends, play next song 
        if(this.currSong.currentTime == this.currSong.duration){
          this.playNext();
        }

      }
    });

  }

  sToTime(t){
    return this.padZero(parseInt(String((t / (60) ) % 60 )));
    this.padZero(parseInt(String((t) % 60)));

  }

  padZero(v){
    return (v < 10) ? "0" + v : v;
  }

  playNext(){
    //get current songs index
   //private  logrf = imgLogo+ img;
    var index = this.songs.findIndex(x => x.title == this.currTitle);

    //if current song is lost then play first song
    if((index + 1) == this.songs.length){
      this.playSong(this.songs[0].title, this.songs[0].subtitle, this.songs[0].img, this.songs[0].path);

    }
    //else play next song

    else{
      var nextIndex = index + 1;
      this.playSong(this.songs[nextIndex].title, this.songs[nextIndex].subtitle, this.songs[nextIndex].img, this.songs[nextIndex].path);
    }

  }


  playPrev(){
    //get current songs index
    var index = this.songs.findIndex(x => x.title == this.currTitle);

    //if current song is first one then play song song
    if(index  ==0){
      var lastIndex = this.songs.length - 1;
      this.playSong(this.songs[lastIndex].title, this.songs[lastIndex].subtitle, this.songs[lastIndex].img, this.songs[lastIndex].path);

    }
    //else play previous song

    else{
      var prevIndex = index - 1;
      this.playSong(this.songs[prevIndex].title, this.songs[prevIndex].subtitle, this.songs[prevIndex].img, this.songs[prevIndex].path);
    }

  }

  //minimize full player view
  minimize(){
    document.getElementById("fullPlayer").style.bottom = "1000px";
    document.getElementById("miniPlayer").style.bottom = "0px";
  }
  //maximize full player view
  maximize(){
    document.getElementById("fullPlayer").style.bottom = "0px";
    document.getElementById("miniPlayer").style.bottom = "-100px";
  }

  //pause current song
  pause(){
    this.currSong.pause();
    this.isPlaying = false;
  }

  //play current song
  play(){
    this.currSong.play();
    this.isPlaying = true;
  }

  //close currently playing song and reset current song info

  cancel(){
  /* document.getElementById("miniplayer").style.bottom = "-100px";
    this.currImage = "";
    this.currTitle = "";
    this.currSubtitle = "";
    this.progress = 0;
    */ this.currSong.pause();
   
   this.isPlaying = false;   
    this.router.navigateByUrl('/audios');
    document.getElementById("miniplayer").style.bottom = "-100px";
  }

  //on touching ion-range
touchStart() {
  this.isTouched = true;
  this.currRangeTime = Number(this.range.value);
}

//On moving ion-range
//update current seconds text

touchMove(){
  this.currSecsText = this.sToTime(this.range.value);
}

//on touch released/end
touchEnd(){
  this.isTouched = false;
  this.currSong.currentTime = Number(this.range.value);
  this.currSecsText = this.sToTime(this.currSong.currentTime)
  this.currRangeTime = Number(this.currSong.currentTime.toFixed(2).toString().substring(0,5));
  if(this.isPlaying){
    this.currSong.play();
  }

}

}
