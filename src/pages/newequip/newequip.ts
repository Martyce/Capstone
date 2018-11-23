import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewequipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newequip',
  templateUrl: 'newequip.html',
})
export class NewequipPage {
  oitemName: any;
  oitemQty: any;
  items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewequipPage');
  }

  addItems(){
    let x = {
      "itemName": this.oitemName,
      "itemQty": this.oitemQty
    }
    this.items.push(x);
  }
  removeItems(val:any){
    this.items.splice(val, 1);
  }

}
