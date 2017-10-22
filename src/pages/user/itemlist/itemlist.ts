
import {Component} from "@angular/core";
import {MainService} from "../../../app/services/MainService";
import {Storage} from "@ionic/storage"
import {ToastController} from "ionic-angular";
@Component({
  selector: 'page-item-list',
  templateUrl: 'itemlist.html'
})

export class ItemList{
  cart : any[];
  constructor(public mainService: MainService, public storage: Storage, public toast: ToastController) {
    this.storage.get('uid').then(val => {
      this.mainService.viewCart(val).subscribe(data => {
        this.cart = data.data
      }, err => {
         this.toast.create({
           message: err.message,
           duration: 3000,
           position: 'bottom'
         })
      })
    })
  }
}
