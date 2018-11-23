import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewreservationPage } from '../newreservation/newreservation';
import { NewroomPage } from '../newroom/newroom';
import { NewequipPage } from '../newequip/newequip';

/**
 * Generated class for the ChooseoptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chooseopt',
  templateUrl: 'chooseopt.html',
})
export class ChooseoptPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseoptPage');
  }

  setPush(val: any){
    localStorage.borrowedType = "";
    localStorage.borrowedType = val;
    if(val == "Functions"){
      this.navCtrl.push(NewreservationPage);
    } else if(val == "Rooms") {
      this.navCtrl.push(NewroomPage);
    } else {
      this.navCtrl.push(NewequipPage);
    }
  }

}
