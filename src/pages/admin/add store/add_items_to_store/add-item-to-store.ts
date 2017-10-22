import {Component} from "@angular/core";
import {MainService} from "../../../../app/services/MainService";
import {NavParams, ToastController} from "ionic-angular";
import {createUrlResolverWithoutPackagePrefix} from "@angular/compiler";

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item-to-store.html'
})

export class AddItemToStore {
  items: any;
  item_id: any;
  cost: any;
  constructor(public mainService: MainService, public toast: ToastController, public navParams: NavParams) {
    this.mainService.getItemList().subscribe(data => {
      this.items = data.data
    }, err => {
      this.toast.create({
        message: err.message,
        duration: 3000,
        position: 'bottom'
      }).present()
    })
  }

  addItem(){
    console.log(this.item_id)
    let postdata = {
      data: {
        items: [
          {
            item_id : this.item_id,
            cost: this.cost
          }
        ]
      }
    };
    this.mainService.addItemToStore(postdata,this.navParams.get('store_id')).subscribe(data => {
      this.toast.create({
        message: 'Successfully added item',
        duration: 3000,
        position: 'bottom'
      }).present()
    }, err=> {
      this.toast.create({
        message: err.message,
        duration: 3000,
        position: 'bottom'
      }).present()
    })
    }
  }

