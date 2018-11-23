import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CalendarModule } from 'ionic3-calendar-en';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewreservationPage } from '../pages/newreservation/newreservation';
import { NextQuePage } from '../pages/next-que/next-que';
import { OtherspecsPage } from '../pages/otherspecs/otherspecs';
import { InputbdownPage } from '../pages/inputbdown/inputbdown';
import { QuedatePage } from '../pages/quedate/quedate';
import { QuedetPage } from '../pages/quedet/quedet';
import { ChooseoptPage } from '../pages/chooseopt/chooseopt';
import { NewroomPage } from '../pages/newroom/newroom';
import { NewequipPage } from '../pages/newequip/newequip';
import { EquipbdownPage } from '../pages/equipbdown/equipbdown';
import { ViewborrowdetPage } from '../pages/viewborrowdet/viewborrowdet';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataPProvider } from '../providers/data-p/data-p';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NextQuePage,
    NewreservationPage,
    OtherspecsPage,
    InputbdownPage,
    QuedatePage,
    QuedetPage,
    ChooseoptPage,
    NewroomPage,
    NewequipPage,
    LoginPage,
    RegisterPage,
    EquipbdownPage,
    ViewborrowdetPage
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  exports:[
    NewreservationPage,
    NextQuePage,
    OtherspecsPage,
    InputbdownPage,
    QuedatePage,
    QuedetPage,
    ChooseoptPage,
    NewroomPage,
    NewequipPage,
    LoginPage,
    RegisterPage,
    EquipbdownPage,
    ViewborrowdetPage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewreservationPage,
    NextQuePage,
    OtherspecsPage,
    InputbdownPage,
    QuedatePage,
    QuedetPage,
    ChooseoptPage,
    NewroomPage,
    NewequipPage,
    LoginPage,
    RegisterPage,
    EquipbdownPage,
    ViewborrowdetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataPProvider
  ]
})
export class AppModule {}
