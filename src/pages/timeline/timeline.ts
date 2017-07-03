import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController, ViewController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
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
  dates = { photo:''}
  correo;
  nombre;
  logeado = null;
  @ViewChild('myNav') nav: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,
  public modalCtrl: ModalController,public viewCtrl: ViewController, public postsService : PostsService,
  public auth: Auth,public user: User) {
    
    if (this.auth.isAuthenticated()) {
          
      console.log(this.user);
      this.logeado = 1;
      this.dates.photo = this.user.get('photo' , '');
      this.nombre = this.user.details.name;
      this.correo = this.user.details.email;
      
      if(this.dates.photo == null){
        this.dates.photo = this.user.details.image;
      }

      // this.img = this.user.details.image;
      
    }
    
    console.log(this.logeado);

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

 public goToProfile(id){

    this.navCtrl.push(DetailPage,{id:id});

  }

  public likePost(id){

      // this.postsService.getPost(id).subscribe(post =>{this.post.likes = post;})

  }


}
