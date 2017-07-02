import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController, ViewController } from 'ionic-angular';

// import firebase from 'firebase';
// import { Camera } from 'ionic-native';
import { PostsService } from '../../services/posts.service';

import { PopoverPage } from '../popover/popover';
import { ModalPage } from '../modal/modal';
import { SearchPage } from '../search/search';
import { LoginPage } from '../login/login';
import { PublicarPage } from '../publicar/publicar';
import { DetailPage } from '../detail/detail';

@IonicPage()

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})

export class TimelinePage {

  posts = [];

  @ViewChild('myNav') nav: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,
  public modalCtrl: ModalController,public viewCtrl: ViewController, public postsService : PostsService) {
    
    postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });

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
   presentModal(id) {
    // let modal = this.modalCtrl.create(ModalPage, { userId: 8675309 });
    let modal = this.modalCtrl.create(ModalPage,{id:id});
    modal.present();
  }
  publicar(){
    let modal2 = this.modalCtrl.create(PublicarPage,{id:0});
    modal2.present();
  }
  
  search(){
    this.navCtrl.push(SearchPage);
  }
  
  back(){
    this.navCtrl.push(LoginPage);
 }

 public goToDetailPage(id){

    this.navCtrl.push(DetailPage,{id:id});

  }


}
