import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { ToastController } from 'ionic-angular';

import { PerfilPage } from '../perfil/perfil';
import { RegistroPage } from '../registro/registro';
import { LostpassPage } from '../lostpass/lostpass';
import { TimelinePage } from '../timeline/timeline';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email;
  password;
  fullname;
  fullemail;
  profilepicture;
  constructor(
    public navCtrl: NavController, public navParams: NavParams,public auth: Auth, public user: User, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  registro(){
    this.navCtrl.push(RegistroPage);
  }

  dashboard(){
    console.log('login');
    console.log(this.email);
    console.log(this.password);

     if(this.email != undefined ||  this.password != undefined){
       let details = { 'email': this.email, 'password': this.password };
       this.auth.login('basic' , details).then(() => {
      //   this.push.register().then((t: PushToken) => {
      //     console.log('reg push');
      //   return this.push.saveToken(t);
      // }).then((t: PushToken) => {
      //   console.log('Token saved:', t.token);
      // });
      let toast = this.toastCtrl.create({
        message: 'Successful login',
        duration: 3500,
        position: 'top'
        });
        toast.present();
      this.navCtrl.push(PerfilPage);
        
       }, (err) => {
           console.log('error  ');
             console.log(err);
              let toast = this.toastCtrl.create({
                message: 'Su email o Password son incorrectos',
                duration: 3500,
                position: 'top'
            });
            toast.present();
          });
     }else {
      let toast = this.toastCtrl.create({
        message: 'Verifique sus datos',
        duration: 3500,
        position: 'top'
    });
    toast.present();
     }
    // this.navCtrl.push(Dashboard);
}

  contrasena(){
    this.navCtrl.push(LostpassPage);
  }

  timeline(){
    this.navCtrl.push(TimelinePage);
  }

  loginConFacebook(){
    this.auth.login('facebook').then(()=>{
      this.fullname = this.user.social.facebook.data.full_name;
      this.profilepicture = this.user.social.facebook.data.profile_picture;
      this.fullemail = this.user.social.facebook.data.email;
      this.navCtrl.push(PerfilPage);
      let toast = this.toastCtrl.create({
        message: 'Successful login',
        duration: 3000,
         position: 'top'
        });
        toast.present();
    }, (err) => {
           console.log('error  ');
             console.log(err);
              let toast = this.toastCtrl.create({
                message: 'Su email o Password son incorrectos',
                duration: 3500,
                position: 'top'
            });
            toast.present();
          });
  }

  loginConTwitter(){
    this.auth.login('twitter').then();
     let toast = this.toastCtrl.create({
        message: 'Successful login',
        duration: 3000,
         position: 'top'
        });
        toast.present();
  }

  loginConInstagram(){
    this.auth.login('instagram').then();
     let toast = this.toastCtrl.create({
        message: 'Successful login',
        duration: 3000,
         position: 'top'
        });
        toast.present();
  }

  }
//guia de login -> https://docs.ionic.io/services/auth/facebook-auth.html