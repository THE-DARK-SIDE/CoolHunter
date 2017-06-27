import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController, ViewController } from 'ionic-angular';

import { PopoverPage } from '../popover/popover';
import { ModalPage } from '../modal/modal';
import { SearchPage } from '../search/search';
import { LoginPage } from '../login/login';

/**
 * Generated class for the TimelinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,public modalCtrl: ModalController,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
   presentModal() {
    // let modal = this.modalCtrl.create(ModalPage, { userId: 8675309 });
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
    }
  
  search(){
    this.navCtrl.push(SearchPage);
  }
  
  back(){
    this.navCtrl.push(LoginPage);
 }
}
