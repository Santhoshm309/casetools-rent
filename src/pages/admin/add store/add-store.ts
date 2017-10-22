import {Component} from "@angular/core";
import {MainService} from "../../../app/services/MainService";
import {ToastController} from "ionic-angular";

@Component({
  selector : 'pop-add-store',
  templateUrl: 'add-store.html'
})

export class AddStore {
  name: any;
  constructor(public toast: ToastController,public mainService: MainService){

  }

  addStore() {
    let post_data = {
      data : {
        name : this.name
      }
    }
    this.mainService.addStore(post_data).subscribe(data => {
      this.toast.create({
        message: 'Successfully Added',
        duration : 3000,
        position:'bottom'
      }).present();

    }, err=> {
      this.toast.create({
        message: err.message,
        duration : 3000,
        position:'bottom'
      }).present();

    })
  }


}
