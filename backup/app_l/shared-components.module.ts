import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosPage } from './videos/videos.page';
import { AudiosPage } from './audios/audios.page';



@NgModule({
  declarations: [ VideosPage, AudiosPage],
  imports: [
    CommonModule
  ],
  exports: [VideosPage, AudiosPage],
})
export class SharedComponentsModule { }
