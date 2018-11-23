import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NextQuePage } from '../next-que/next-que';
import { InputbdownPage } from '../inputbdown/inputbdown';

/**
 * Generated class for the QuedetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quedet',
  templateUrl: 'quedet.html',
})
export class QuedetPage {
  RmName: any;
  eventTitle: any;
  contactN: any;
  eventType: any;
  eventDesc: any;
  fnameReq: any;
  deptName: any;
  datas = {
    eventDt: [],
    reservationDt: {
      aaFacility: "",
      aeventTitle: "",
      beventRequestor: "1",
      ceventDept: "CCS",
      deventCont: "",
      feventType: "",
      geventDesc: "",
    },
    eventMaterials: [],
    otherSpec: {
      aoutsideAtt: "",
      binsideAtt: "",
      cfoodCateg: "",
      dushers: ""
    },
    resourceVIP: []
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getData();
    console.log(this.datas);
    this.fnameReq = localStorage.FullName;
    this.deptName = localStorage.Dept;
  }

  getData() {
    this.datas = JSON.parse(localStorage.xdatas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuedetPage');
  }

  setAll() {
    this.datas.reservationDt.aaFacility = localStorage.room;
    this.datas.reservationDt.aeventTitle = this.eventTitle;
    this.datas.reservationDt.deventCont = this.contactN;
    this.datas.reservationDt.feventType = this.eventType;
    this.datas.reservationDt.geventDesc = this.eventDesc;
    this.saveData();
  }

  saveData() {
    localStorage.xdatas = JSON.stringify(this.datas);
    console.log(this.datas);
  }

  openPage() {
    this.setAll();
    if (localStorage.borrowedType == "Functions") {
      this.navCtrl.push(NextQuePage);
    } else {
      this.navCtrl.push(InputbdownPage);      
    }
  }
}
