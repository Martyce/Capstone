import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { QuedatePage } from '../quedate/quedate';

/**
 * Generated class for the NewreservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newreservation',
  templateUrl: 'newreservation.html',
})
export class NewreservationPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    localStorage.xdatas = "";
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad NewreservationPage');
  }

  openPage() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.navCtrl.push(NextQuePage);
  }

  selItem(data){
    localStorage.room = data;
    this.navCtrl.push(QuedatePage);
  }



}
