import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewborrowdetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewborrowdet',
  templateUrl: 'viewborrowdet.html',
})
export class ViewborrowdetPage {
  hide: boolean = false;
  ctrlNo:any = localStorage.ctrlNo;
  datas = {
    eventDt: [{
      ctrlNo: 0
    }],
    reservationDt: {
      aaFacility: "Test",
      aeventTitle: "",
      beventRequestor: "1",
      ceventDept: "CCS",
      deventCont: "",
      feventType: "",
      geventDesc: "",
    },
    eventMaterials: [{
      ctrlNo: 0
    }],
    otherSpec: {
      aoutsideAtt: "",
      binsideAtt: "",
      cfoodCateg: "",
      dushers: ""
    },
    resourceVIP: [{
      ctrlNo: 0
    }]
  };


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.checkFunc();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewborrowdetPage');
  }
  checkFunc() {
    if (localStorage.rmType == "Functions") {
      this.hide = true;
    } else {
      this.hide = false;
    }
  }

}
