import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuedatePage } from './quedate';

@NgModule({
  declarations: [
    QuedatePage,
  ],
  imports: [
    IonicPageModule.forChild(QuedatePage),
  ],
})
export class QuedatePageModule {}
