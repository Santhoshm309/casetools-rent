import { Component } from '@angular/core';
import {App, ModalController, NavController, PopoverController, ToastController} from 'ionic-angular';
import {Storage} from "@ionic/storage"
import {HomePage} from "../home/home";
import {MainService} from "../../app/services/MainService";
import {Storelist} from "./storelist/storelist";
import {ItemList} from "./itemlist/itemlist";

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  store_list: any;
  constructor(public navCtrl: NavController,public app: App,public storage: Storage,  public mainService: MainService, public toasterCtrl: ToastController,public modal: ModalController, public pop: PopoverController) {
    this.mainService.getStoreList().subscribe(data => {
      this.store_list = data.data;
    }, err => {
      this.toasterCtrl.create({
        message: err.message,
        duration : 3000,
        position : 'bottom'
      }).present();
    })
  }

  viewCart() {
    this.pop.create(ItemList).present();
  }

  storeDetails(index){
    this.navCtrl.push(Storelist, {storeId: this.store_list[index].id})
  }
  logout(){
    this.toasterCtrl.create({
      message: 'Logout Successful',
      duration : 3000,
      position:'bottom'
    }).present();
    this.storage.clear();
    this.app.getRootNav().push(HomePage);
  }



}
