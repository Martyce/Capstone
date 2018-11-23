import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NextQuePage } from './next-que';

@NgModule({
  declarations: [
    NextQuePage,
  ],
  imports: [
    IonicPageModule.forChild(NextQuePage),
  ],
})
export class NextQuePageModule {}
