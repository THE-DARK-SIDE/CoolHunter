
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { SearchmodalPage } from '../searchmodal/searchmodal';
/**
 * Generated class for the ConsultaMPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.initializeItems();
  }
   initializeItems() {
    this.items = [
      'angel','kevin','jose','maikol'
    ];
  }
   onInput(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultaMPage');
  }
  back(){
    this.navCtrl.pop();
  }
  presentModal() {
    // let modal = this.modalCtrl.create(ModalPage, { userId: 8675309 });
    let searchmodal = this.modalCtrl.create(SearchmodalPage);
    searchmodal.present();
    }
  
}
