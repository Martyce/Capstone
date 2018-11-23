import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime, AlertController } from 'ionic-angular';
import { QuedetPage } from '../quedet/quedet';
/**
 * Generated class for the QuedatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quedate',
  templateUrl: 'quedate.html',
})
export class QuedatePage {
  tval: any;
  eventTitle: any;
  myDate: any;
  myDateX: any;
  currDate: any;
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
    otherSpec:{
      aoutsideAtt: "",
      binsideAtt: "",
      cfoodCateg: "",
      dushers: ""
    },
    resourceVIP:[]
  };
  currentEvents = [
    {
      year: 2018,
      month: 9,
      date: 25
    },
    {
      year: 2018,
      month: 9,
      date: 26
    }
  ];

  sdates = [];

  @ViewChild('ftime')
  timePicker: DateTime

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.tval = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuedatePage');
  }


  callPick() {
    setTimeout(() => {
      this.myDate = "";
      this.timePicker.open();
    }, 500);
  }

  getTime() {
    let alert = this.alertCtrl.create({
      title: 'Facility is not available within this time',
      subTitle: 'Please select valid time',
      buttons: ['Dismiss']
    });

    this.myDateX = "";
    let x = this.myDate.split(":");
    console.log(x[0]);
    if (parseInt(x[0]) > 17 || parseInt(x[0]) < 7) {
      alert.present();
      alert.onDidDismiss(() => {
        this.callPick();
      });
    } else {
      if (parseInt(x[0]) >= 12) {
        this.fId("ftm").innerHTML = "PM";
      } else {
        this.fId("ftm").innerHTML = "AM";
      }
      let y = "";
      for (let i = (parseInt(x[0]) + 1); i <= 17; i++) {
        let z = "";
        if (i < 10) {
          z = "0" + i;
        } else {
          z = i.toString();
        }
        if (i != 17) {
          y += z + ",";
        } else {
          y += z;
        }

      }
      this.tval = y;
      this.fId('ftm').style.display = "flex";

    }
  }

  addDate(){
    let x = {
      "ctrlNo": 201801,
      "eventDate": this.currDate,
      "eventFrom": this.myDate,
      "eventTo": this.myDateX
    }

    this.sdates.push(x);

    this.myDate = "";
    this.myDateX = "";
    this.fId("ttm").innerHTML = "";    
    this.fId("ftm").innerHTML = "";    
  }

  remDate(val: any){
    this.sdates.splice(val, 1);
  }

  getTimeX(){
    let x = this.myDateX.split(":");
    if (parseInt(x[0]) >= 12) {
      this.fId("ttm").innerHTML = "PM";
    } else {
      this.fId("ttm").innerHTML = "AM";
    }    
    this.fId('ttm').style.display = "flex";
    this.setAll();
  }

  setAll(){
    this.datas.eventDt = this.sdates;
    console.log(this.datas);
    this.saveData()
  }

  saveData(){
    localStorage.xdatas = JSON.stringify(this.datas);
  }

  onDaySelect(event: any) {

    this.fId('frmtime').style.display = "none";
    this.fId('totime').style.display = "none";
    this.fId('ftm').style.display = "none";
    this.fId('ttm').style.display = "none";
    this.fId('addBtn').style.display = "none";

    this.currDate = (event.month+1) + "/" + event.date + "/" + event.year;
    console.log(this.currDate);
    this.myDate = "";
    this.myDateX = "";

    console.log(event);
    if (event.hasEvent == false) {
      document.getElementById('sch').innerHTML = "<h4 class='item-center' text-center>No events within this day</h4>"
    } else {
      let ls = "";
      ls += '<ion-card class="lb card card-md"><ion-card-content class="card-content card-content-md"><ion-row class="row"><ion-col class="col" col-3><small>4:00PM</small><br><small>5:00PM</small></ion-col><ion-col class="col" col-8><p class="lt">Sample</p></ion-col></ion-row></ion-card-content></ion-card>';
      document.getElementById('sch').innerHTML = ls;
    }
  }

  selTime() {
    this.fId('frmtime').style.display = "flex";
    this.fId('totime').style.display = "flex";

    this.fId('addBtn').style.display = "flex";    
  }

  fId(val: any) {
    return document.getElementById(val);
  }

  nextPage() {
    this.navCtrl.push(QuedetPage);
  }

}
