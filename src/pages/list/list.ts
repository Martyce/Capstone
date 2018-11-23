import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewborrowdetPage } from '../viewborrowdet/viewborrowdet';
import { DataPProvider } from '../../providers/data-p/data-p';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  lrooms: any;
  functs: any;
  equips: any;
  room = "Functions"
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private dp: DataPProvider) {
    // If we navigated to this page, we will have an item available as a nav param
      this.setPull();
  }

  setPush(no: any, rm: any){
    localStorage.ctrlNo = no;
    localStorage.rmType = rm;
    this.navCtrl.push(ViewborrowdetPage);
  }

  setPull(){
    this.dp.getData("tbl_reservations/fldUserID/"+ localStorage.userID).subscribe(x=>{
      this.functs = x;
    });

    this.dp.getData("tbl_roomreservations/fldUserID/"+ localStorage.userID).subscribe(x=>{
      this.lrooms = x;
    });    
  }

}
