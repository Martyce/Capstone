import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, AlertController } from 'ionic-angular';
import { ChooseoptPage } from '../chooseopt/chooseopt';
import { RegisterPage } from '../register/register';
import { DataPProvider } from '../../providers/data-p/data-p';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {
  
  uname: any;
  pswd: any;
  andata: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    private dp: DataPProvider,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  pushPage() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.setRoot(ChooseoptPage);
    }, 1000);
  }

  loginCheck(){
    let x = {
      un: this.uname,
      pw: this.pswd
    }

    this.dp.loginUser(x).subscribe(data =>{
      let xdata = {
        Authorize : "False",
        fldRemarks: "Active",
        UserID: "",
        fldAccType: "",
        fldEmailAdd: "",
        fldDept: "",
        fldFullName: "",
        fldContactNo: ""
      }
      this.andata = data;
      xdata = this.andata;
      
      if(xdata.Authorize == "False"){
        let alert = this.alertCtrl.create({
          title: 'Invalid Login Credentials',
          subTitle: 'Please check your login details',
          buttons: ['Dismiss']
        }); 
        alert.present();       
      } else {
        if(xdata.fldRemarks != "Active"){
          let alert = this.alertCtrl.create({
            title: 'Please Verify your Account',
            subTitle: 'Check your email address',
            buttons: ['Dismiss']
          });     
          alert.present();      
        } else{
          localStorage.userID = xdata.UserID;
          localStorage.AccType = xdata.fldAccType;
          localStorage.FullName = xdata.fldFullName;
          localStorage.EmailAdd = xdata.fldEmailAdd;
          localStorage.Dept = xdata.fldDept;
          localStorage.Contact = xdata.fldContactNo;
          this.pushPage();
        }
      }
    })
  }

  presentModal() {
    const modal = this.modalCtrl.create(RegisterPage);
    modal.present();
  }  

}
