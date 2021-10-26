import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatMenuPage } from './chat-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ChatMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatMenuPageRoutingModule {}
