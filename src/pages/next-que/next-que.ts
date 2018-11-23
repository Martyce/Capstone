import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OtherspecsPage } from '../otherspecs/otherspecs';

/**
 * Generated class for the NextQuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-next-que',
  templateUrl: 'next-que.html',
})
export class NextQuePage {
  oitemName: any;
  oitemQty: any;
  smb: any;
  acs: any;
  tbl: any;
  mcp: any;
  spk: any;
  wbd: any;
  allVal = [];

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private el: ElementRef) {
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextQuePage');
  }

  nextPage() {
    this.saveData()
    console.log(this.datas);
    this.navCtrl.push(OtherspecsPage);
  }

  getData() {
    this.datas = JSON.parse(localStorage.xdatas);
  }

  addOtherItems() {
    let x = {
      ctrlNo: 0,
      itemName: this.oitemName,
      itemQty: this.oitemQty
    }
    this.datas.eventMaterials.push(x);
    this.viewoItems()
    console.log(this.datas.eventMaterials);
    this.oitemName = "";
    this.oitemQty = "";
  }

  saveData() {
    localStorage.xdatas = JSON.stringify(this.datas);
    console.log(this.datas);
  }

  viewoItems() {
    let ls = "";
    this.allVal = [];
    document.getElementById("itemList").innerHTML = "";
    for (let i = 0; i < this.datas.eventMaterials.length; i++) {
      if (!this.fItemList(this.datas.eventMaterials[i].itemName)) {
        ls = "";
        ls += "<tr>";
        ls += "<td>" + this.datas.eventMaterials[i].itemName + "</td>";
        ls += "<td>" + this.datas.eventMaterials[i].itemQty + "</td>";
        ls += '<td><button ion-button class="disable-hover bar-buttons bar-buttons-md button button-md button-default button-default-md button-menutoggle button-menutoggle-md" id="btn' + i + '">X</button></td>';
        ls += "</td>";
        this.allVal.push(i);
        document.getElementById("itemList").innerHTML += ls;
      }
    }
    this.putAllEv();
  }

  putAllEv() {
    for (let i = 0; i < this.allVal.length; i++) {
      this.el.nativeElement.querySelector('#btn' + this.allVal[i]).addEventListener('click', (event) => this.removeoItems(parseInt(this.allVal[i])));
    }
  }

  fItemList(val: any) {
    let allItem = ["Single Monoblocks", "Arm Chairs", "Tables", "Microphones", "Speakers", "White Board"];
    for (let i = 0; i < allItem.length; i++) {
      if (allItem[i] == val) {
        return true;
      }
    }
  }

  removeoItems(val: any) {
    this.datas.eventMaterials.splice(parseInt(val), 1);
    this.viewoItems();
  }

  dataC(e: any, num) {
    switch (num) {
      case 1:
        if (parseInt(num) == 1 && e.checked == true) {
          document.getElementById("smId").style.display = "block";
        } else {
          document.getElementById("smId").style.display = "none";
          if (parseInt(this.smb) > 0) {
            this.smb = "";
            this.pushItem('Single Monoblocks', 0);
          }
        }
        break;
      case 2:
        if (parseInt(num) == 2 && e.checked == true) {
          document.getElementById("acId").style.display = "block";
        } else {
          document.getElementById("acId").style.display = "none";
          if (parseInt(this.acs) > 0) {
            this.acs = "";
            this.pushItem('Arm Chairs', 0);
          }
        }
        break;
      case 3:
        if (parseInt(num) == 3 && e.checked == true) {
          document.getElementById("tbId").style.display = "block";
        } else {
          document.getElementById("tbId").style.display = "none";
          if (parseInt(this.tbl) > 0) {
            this.tbl = "";
            this.pushItem('Tables', 0);
          }
        }
        break;
      case 4:
        if (parseInt(num) == 4 && e.checked == true) {
          document.getElementById("mcId").style.display = "block";
        } else {
          document.getElementById("mcId").style.display = "none";
          if (parseInt(this.mcp) > 0) {
            this.mcp = "";
            this.pushItem('Microphones', 0);
          }
        }
        break;
      case 5:
        if (parseInt(num) == 5 && e.checked == true) {
          document.getElementById("skId").style.display = "block";
        } else {
          document.getElementById("skId").style.display = "none";
          if (parseInt(this.spk) > 0) {
            this.spk = "";
            this.pushItem('Speakers', 0);
          }
        }
        break;
      case 6:
        if (parseInt(num) == 6 && e.checked == true) {
          document.getElementById("wbId").style.display = "block";
        } else {
          document.getElementById("wbId").style.display = "none";
          if (parseInt(this.wbd) > 0) {
            this.wbd = "";
            this.pushItem('White Board', 0);
          }
        }
        break;
      default:
        break;

    }

    console.log(e.checked);
  }


  pushItem(val: any, qty: any) {
    if (qty == "" || parseInt(qty) == 0) {
      for (let i = 0; i < this.datas.eventMaterials.length; i++) {
        if (this.datas.eventMaterials[i].itemName == val) {
          this.datas.eventMaterials.splice(i, 1);
        }
      }
    } else {
      if (this.datas.eventMaterials.length == 0) {
        let x = {
          ctrlNo: 0,
          itemName: val,
          itemQty: qty
        }
        this.datas.eventMaterials.push(x);
      } else {
        if (this.checkMat(val)) {
          for (let i = 0; i < this.datas.eventMaterials.length; i++) {
            if (this.datas.eventMaterials[i].itemName == val) {
              this.datas.eventMaterials[i].itemQty = qty;
            }
          }
        } else {
          let x = {
            ctrlNo: 0,
            itemName: val,
            itemQty: qty
          }
          this.datas.eventMaterials.push(x);
        }


      }



    }
    console.log(this.datas.eventMaterials);
  }

  checkMat(val: any) {
    for (let i = 0; i < this.datas.eventMaterials.length; i++) {
      if (this.datas.eventMaterials[i].itemName == val) {
        return true;
      }
    }
    return false;
  }
}
