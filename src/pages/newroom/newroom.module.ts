import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewroomPage } from './newroom';

@NgModule({
  declarations: [
    NewroomPage,
  ],
  imports: [
    IonicPageModule.forChild(NewroomPage),
  ],
})
export class NewroomPageModule {}
