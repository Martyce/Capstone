import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DataPProvider } from '../../providers/data-p/data-p';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private myG: FormGroup;
  pwdmatch: boolean = false;
  emailmatch: boolean = false;
  upwd: any;
  ucpwd: any;
  emailvad: any;
  valid_messages = {}
  userCount = 0;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private dp: DataPProvider,
    private alertCtrl: AlertController,
    private viewCtrl: ViewController
  ) {
    this.valid_messages = {
      'Fname': [
        { type: 'required', message: 'Username is required.' },
        { type: 'pattern', message: 'Your username must contain numbers and letters.' }
      ],
      'Email': [
        { type: 'required', message: 'Name is required.' }
      ]
    }


    this.myG = this.formBuilder.group({
      xfn: new FormControl('', [Validators.required]),
      em: new FormControl('', [Validators.required]),
      pwd: new FormControl('', [Validators.required]),
      cpwd: new FormControl('', [Validators.required]),
      dpt: new FormControl('', [Validators.required]),
      cnt: new FormControl('', [Validators.required])
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  matchPass() {
    if (this.ucpwd != this.upwd) {
      this.pwdmatch = true;
      document.getElementById('redClass').classList.remove('ng-valid');
      document.getElementById('redClass').classList.add('ng-invalid');

      document.getElementById('redClass_t').classList.remove('ng-valid');
      document.getElementById('redClass_t').classList.add('ng-invalid');
    } else {
      this.pwdmatch = false;
    }
  }

  setAll() {
    let x = {
      xfn: "",
      em: "",
      pwd: "",
      cnt: '',
      dpt: ''
    }
    x = this.myG.value;
    let y = {
      aFn: x.xfn,
      bEm: x.em,
      cPw: x.pwd,
      dpt: x.dpt,
      ecn: x.cnt,
      fun: "User",
      grm: "Active"
    }
    return y;
  }

  checkUser() {
    this.dp.getData("tbl_users/fldEmailAdd/" + this.emailvad).subscribe(x => {
      this.userCount = Object.keys(x).length;
      this.validateUser();
    });
  }

  validateUser() {
    if (this.userCount > 0) {
      document.getElementById('emRed').classList.remove('ng-valid');
      document.getElementById('emRed').classList.add('ng-invalid');
      this.emailmatch = true;
    } else {
      this.emailmatch = false;
    }
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Account Succesfully created',
      subTitle: 'Please check your email for account verification',
      buttons: [{
        text: 'OK',
        handler: ()=>{
          this.dismiss();
        }
      }]
    });
    alert.present();
  }

  submitForm() {
    console.log(this.myG.value);
    this.setAll();
    this.dp.sendData([this.setAll()], "tbl_users").subscribe();
    this.presentAlert();
  }

}
