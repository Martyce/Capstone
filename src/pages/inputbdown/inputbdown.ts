import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataPProvider } from '../../providers/data-p/data-p';
/**
 * Generated class for the InputbdownPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inputbdown',
  templateUrl: 'inputbdown.html',
})
export class InputbdownPage {
  evtMat = [];
  rsVP = [];
  ctrlNo = 0;

  sendData = {
    aaCtrnl: 0,
    aFacility: "",
    bEvntName: "",
    cUserID: "",
    dDpt: "",
    eContNo: "",
    fEvtType: "",
    gEvtDesc: "",
    hOutside: "",
    iInside: "",
    jFood: "",
    kUshers: "",
    lReq: this.getDate(),
    mRemarks: "",
  }

  RoomsendData = {
    aaCtrnl: 0,
    aFacility: "",
    bEvntName: "",
    cUserID: "",
    dDpt: "",
    eContNo: "",
    fEvtType: "",
    gEvtDesc: "",
    lReq: this.getDate(),
    mRemarks: "",
  }

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

  hide: boolean = false;
  sdates = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private dprovider: DataPProvider) {
    this.getData();
    this.evtMat = this.datas.eventMaterials;
    this.rsVP = this.datas.resourceVIP;
    this.sdates = this.datas.eventDt;

    if (localStorage.borrowedType == "Functions") {

      this.setCtrlNo();
    } else {

      this.setRoomCtrlNo();
    }

    this.checkFunc();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputbdownPage');
  }

  checkFunc() {
    if (localStorage.borrowedType == "Functions") {
      this.hide = true;
    } else {
      this.hide = false;
    }
  }

  getData() {
    this.datas = JSON.parse(localStorage.xdatas);
  }

  getDate() {
    let currentDate = new Date()
    let day = currentDate.getDate()
    let month = currentDate.getMonth() + 1
    let year = currentDate.getFullYear()

    var h = currentDate.getHours();
    var m = currentDate.getMinutes();
    var s = currentDate.getSeconds();

    return month + "/" + day + "/" + year + " @ " + h + ":" + m + ":" + s;
  }

  onSub() {
    let alert = this.alertCtrl.create({
      title: 'Are you sure with the details?',
      message: 'Please double check the input, once it was send it cant be undone',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log(this.ctrlNo);
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            console.log('Buy clicked');
            this.confReq();
          }
        }
      ]
    });
    alert.present();
  }

  confReq() {

    if (localStorage.borrowedType == "Functions") {

      this.setAll();
      this.dprovider.sendData([this.sendData], "tbl_reservations").subscribe();
      this.dprovider.sendData(this.datas.eventDt, "tbl_reservedates").subscribe();
      this.dprovider.sendData(this.rsVP, "tbl_rvip").subscribe();
      this.dprovider.sendData(this.evtMat, "tbl_materials").subscribe();
    } else {
      this.roomsetAll();
      this.dprovider.sendData([this.RoomsendData], "tbl_roomreservations").subscribe();
      this.dprovider.sendData(this.datas.eventDt, "tbl_roomreservedates").subscribe();
    }


    let alert = this.alertCtrl.create({
      title: 'Reservation has been made',
      message: 'For more info you can visit the office of VP for Finance and Administration',
    });
    alert.present();
  }

  setCtrlNo() {
    this.dprovider.getData("tbl_reservations")
      .subscribe(data => {
        this.ctrlNo = Object.keys(data).length + 201801;
      });
  }

  setRoomCtrlNo() {
    this.dprovider.getData("tbl_roomreservations")
      .subscribe(data => {
        this.ctrlNo = Object.keys(data).length + 101801;
      });
  }

  roomsetAll() {
    this.RoomsendData.aaCtrnl = this.ctrlNo;
    this.RoomsendData.aFacility = this.datas.reservationDt.aaFacility
    this.RoomsendData.bEvntName = this.datas.reservationDt.aeventTitle
    this.RoomsendData.cUserID = localStorage.userID
    this.RoomsendData.dDpt = localStorage.Dept
    this.RoomsendData.eContNo = this.datas.reservationDt.deventCont
    this.RoomsendData.fEvtType = this.datas.reservationDt.feventType
    this.RoomsendData.gEvtDesc = this.datas.reservationDt.geventDesc
    this.RoomsendData.mRemarks = "Pending"

    for (let i = 0; i < this.datas.eventDt.length; i++) {
      this.datas.eventDt[i].ctrlNo = this.ctrlNo;
    }
  }

  setAll() {
    this.sendData.aaCtrnl = this.ctrlNo;
    this.sendData.aFacility = this.datas.reservationDt.aaFacility
    this.sendData.bEvntName = this.datas.reservationDt.aeventTitle
    this.sendData.cUserID = localStorage.userID
    this.sendData.dDpt = localStorage.Dept
    this.sendData.eContNo = this.datas.reservationDt.deventCont
    this.sendData.fEvtType = this.datas.reservationDt.feventType
    this.sendData.gEvtDesc = this.datas.reservationDt.geventDesc

    this.sendData.hOutside = this.datas.otherSpec.aoutsideAtt
    this.sendData.iInside = this.datas.otherSpec.binsideAtt
    this.sendData.jFood = this.datas.otherSpec.cfoodCateg
    this.sendData.kUshers = this.datas.otherSpec.dushers
    this.sendData.lReq = this.getDate();
    this.sendData.mRemarks = "Pending"

    for (let i = 0; i < this.datas.eventDt.length; i++) {
      this.datas.eventDt[i].ctrlNo = this.ctrlNo;
    }
    for (let j = 0; j < this.evtMat.length; j++) {
      this.evtMat[j].ctrlNo = this.ctrlNo;
    }
    for (let k = 0; k < this.rsVP.length; k++) {
      this.rsVP[k].ctrlNo = this.ctrlNo;
    }
  }

}
