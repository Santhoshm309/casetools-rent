import {MainService} from "../../../app/services/MainService";
import {ModalController, NavParams, PopoverController, ToastController} from "ionic-angular";
import {Component} from "@angular/core";
import {DatePipe} from "@angular/common";
import  {Storage}  from "@ionic/storage"
import {ItemList} from "../itemlist/itemlist";

@Component({
  selector: 'page-store-list',
  templateUrl: 'storelist.html'
})

export class Storelist {
  store_name: any;
  storeDetails: any[];
  itemCosts : any[];
  compare: boolean[];
  constructor(public pop: PopoverController, public storage: Storage, public mainService: MainService, public toast: ToastController, public navParams: NavParams, public datePipe: DatePipe) {

    this.mainService.getStoreDetails(this.navParams.get('storeId')).subscribe(data => {
      this.storeDetails = data.data
      this.store_name = this.storeDetails[0].store_name
    })
  }

  viewCart() {
    this.pop.create(ItemList).present();
  }

  getOtherStoreCosts(index) {
    let item_id = this.storeDetails[index].item_id;
    if(this.storeDetails[index].compare){
      this.storeDetails[index].compare = false;
    }else {
      this.mainService.getItemCosts(item_id).subscribe(data => {
        this.storeDetails[index].compared_items = data.data;
        this.storeDetails[index].compare = true;
      })
    }
  }

  buyItem(index) {
    this.storage.get('uid').then(val => {
      let post_data = {
        data : {
          dateofpurchase : this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
          user_id : val,
          items : [ Number(this.storeDetails[index].item_id) ]
        }
      };

      this.mainService.buyItems(post_data).subscribe(data => {
        this.toast.create({
          message: 'Item added to cart successfully',
          duration : 3000,
          position: 'bottom'
        }).present();
      }, err => {
        this.toast.create({
          message: err.message,
          duration : 3000,
          position: 'bottom'
        }).present();
      })
    })
  }
}
