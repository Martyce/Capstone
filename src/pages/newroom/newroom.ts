import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuedatePage } from '../quedate/quedate';

/**
 * Generated class for the NewroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newroom',
  templateUrl: 'newroom.html',
})
export class NewroomPage {
  rooms:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rooms = "Rooms";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewroomPage');
  }

  pushRoom(val: any){
    localStorage.room = val;
    this.navCtrl.push(QuedatePage);
  }
}
