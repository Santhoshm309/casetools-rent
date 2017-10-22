import { Component } from '@angular/core';
import {App, ModalController, NavController, PopoverController, ToastController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {Storage} from "@ionic/storage"
import {MainService} from "../../app/services/MainService";
import {AddStore} from "./add store/add-store";
import {AddItemToStore} from "./add store/add_items_to_store/add-item-to-store";

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  conferenceList: any[];
  store_list :any[];
  store_items: any[];
  constructor(public navCtrl: NavController,public storage: Storage, public app: App, public MainService: MainService, public toasterCtrl: ToastController,public modal: ModalController, public pop: PopoverController) {
    this.fetchData()
  }

  fetchData() {
    this.MainService.getStoreList().subscribe(data => {
      this.store_list = data.data;
    }, err => {
      this.toasterCtrl.create({
        message: err.message,
        duration : 3000,
        position : 'bottom'
      }).present();
    })
  }


  viewItems(index) {
    console.log("Hi");
    if(this.store_list[index].view){
      this.store_list[index].view = !this.store_list[index].view
    }else{
      this.MainService.viewItemsoFStore(this.store_list[index].id).subscribe(data => {
        this.store_list[index].view = true;
        this.store_list[index].store_items = data.data;
      }, err => {
        this.toasterCtrl.create({
          message: err.message,
          duration : 3000,
          position : 'bottom'
        }).present();
      })
    }
  }

  addItems(index) {
      this.pop.create(AddItemToStore, {store_id: this.store_list[index].id}).present();
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
  openPop() {
   let popo = this.pop.create(AddStore);
   popo.onDidDismiss(() => {
     this.fetchData()
   })
     popo.present();
}
}
