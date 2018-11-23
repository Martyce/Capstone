import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the DataPProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataPProvider {
  post:any;
  xurl = "http://localhost/capstoneapi/";

  constructor(public http: HttpClient) {
    console.log('Hello DataPProvider Provider');
  }

  sendData(data: any, tblname: any){
    this.post = JSON.stringify(data);
    console.log(this.post);
    return this.http.post(this.xurl +'insert/'+ tblname,this.post);
  }

  getData(tblname: any){
    return this.http.get(this.xurl+tblname);
  }
  
  UpdateUser(data){
    this.post = JSON.stringify(data);
    console.log(this.post);
    return this.http.post('http://localhost/AWTS_PROJ/local_api/update/tbl_users',this.post);
  }

  loginUser(data){
    this.post = JSON.stringify(data);
    console.log(this.post);
    return this.http.post(this.xurl + 'login',this.post);
  }

}
