import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  post = {id:null,title:null,text:null};

  id = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public service : ServiceProvider) {
  
    this.id = navParams.get("id");

    if(this.id != 0){
      
      service.getPost(this.id).subscribe(post =>{this.post = post;})

    }

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
  
  dismiss() {
   
   this.viewCtrl.dismiss();
 }

}
