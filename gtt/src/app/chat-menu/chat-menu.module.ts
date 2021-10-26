import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatMenuPageRoutingModule } from './chat-menu-routing.module';

import { ChatMenuPage } from './chat-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatMenuPageRoutingModule
  ],
  declarations: [ChatMenuPage]
})
export class ChatMenuPageModule {}
