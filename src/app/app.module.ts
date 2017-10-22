import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/Login/login";
import {SignupPage} from "../pages/signup/signup";
import {MainService} from "./services/MainService";
import {HttpModule} from "@angular/http";
import {IonicStorageModule} from "@ionic/storage";
import {UserPage} from "../pages/user/user";
import {AdminPage} from "../pages/admin/admin";
import {Storelist} from "../pages/user/storelist/storelist";
import {ItemList} from "../pages/user/itemlist/itemlist";
import {DatePipe} from "@angular/common";
import {AddStore} from "../pages/admin/add store/add-store";
import {AddItemToStore} from "../pages/admin/add store/add_items_to_store/add-item-to-store";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    UserPage,
    AdminPage,
    Storelist,
    ItemList,
    AddStore,
    AddItemToStore
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    UserPage,
    AdminPage,
    Storelist,
    ItemList,
    AddItemToStore,
    AddStore
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MainService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatePipe,
  ]
})
export class AppModule {}
