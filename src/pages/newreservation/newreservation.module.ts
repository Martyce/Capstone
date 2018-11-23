import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewreservationPage } from './newreservation';

@NgModule({
  declarations: [
    NewreservationPage,
  ],
  imports: [
    IonicPageModule.forChild(NewreservationPage),
  ],
})
export class NewreservationPageModule {}
