import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataPProvider } from '../../providers/data-p/data-p';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  datas: any;
  ltotal: any;
  constructor(public navCtrl: NavController, private dprovider: DataPProvider) {
    //this.showConfig();
    console.log(this.getDate());
  }

  aaconfig(){
    this.dprovider.sendData(this.datas, "tbl");
  }

  //showConfig() {
  //  this.dprovider.getData()
   //   .subscribe(data=>{
    //    this.datas = data;
     //   this.ltotal = Object.keys(data).length;
     // });
  //}  

  getDate(){
    let currentDate = new Date()
    let day = currentDate.getDate()
    let month = currentDate.getMonth() + 1
    let year = currentDate.getFullYear()

    var h = currentDate.getHours();
    var m = currentDate.getMinutes();
    var s = currentDate.getSeconds();    

    return month + "/" + day + "/" + year + " @ " + h + ":" + m + ":" + s;
  }

}
