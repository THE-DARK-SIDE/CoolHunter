import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

/**
 * Generated class for the Perfil3rosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfil3ros',
  templateUrl: 'perfil3ros.html',
})
export class Perfil3rosPage {

  dates = { photo:'',comment:''}
  correo;
  nombre;
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth: Auth,public user: User) {
    
            console.log(this.user);
            this.dates.photo = this.user.get('photo' , '');
            this.nombre = this.user.details.name;
            this.correo = this.user.details.email;
            this.dates.comment = this.user.get('comment','');
            if(this.dates.photo == null){
              this.dates.photo = this.user.details.image;
            }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perfil3rosPage');
  }

}
