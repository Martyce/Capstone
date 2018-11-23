import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InputbdownPage } from '../inputbdown/inputbdown';

/**
 * Generated class for the OtherspecsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otherspecs',
  templateUrl: 'otherspecs.html',
})
export class OtherspecsPage {
  apub: any;
  ush: any;
  eao: any;
  eai: any;
  nou: any;
  vrname: any;
  foodCater: any;

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

  constructor(public navCtrl: NavController, public navParams: NavParams,  private el: ElementRef) {
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherspecsPage');
  }
  getData() {
    this.datas = JSON.parse(localStorage.xdatas);
  }

  insertList(){
    let x = {
      ctrlNo: 0,
      fullName: this.vrname
    }
    this.datas.resourceVIP.push(x);
    this.viewList();
  }

  viewList(){
    let ls = "";
    for(let i = 0; i < this.datas.resourceVIP.length;i++){
      ls += '<tr>';
      ls += '<td> '+(i+1)+ '. ' + this.datas.resourceVIP[i].fullName + '</td>';
      ls += '<td><button ion-button class="disable-hover bar-buttons bar-buttons-md button button-md button-default button-default-md button-menutoggle button-menutoggle-md" id="btn' + i + '">X</button></td></td>';
      ls += '</tr>';
    }
    document.getElementById('vipList').innerHTML = ls;    
    this.countList();
  }

  removeList(val: any){
    this.datas.resourceVIP.splice(val, 1);
    this.viewList();
  }

  countList(){
    for (let i = 0; i < this.datas.resourceVIP.length; i++) {
      this.el.nativeElement.querySelector('#btn' + i).addEventListener('click', (event) => this.removeList((i)));
    }    
  }

  setAll(){
    let x = this.foodCater == true ? "Yes" : "No";
    this.datas.otherSpec.aoutsideAtt = this.eao;
    this.datas.otherSpec.binsideAtt = this.eai;
    this.datas.otherSpec.cfoodCateg = x;
    this.datas.otherSpec.dushers = this.nou;
    console.log(this.datas);
  }

  saveData(){
    localStorage.xdatas = JSON.stringify(this.datas);
  }



  xnextPage() {
    this.setAll();
    this.saveData();
    console.log(this.datas);
    this.navCtrl.push(InputbdownPage);
  }

}
