import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform, ViewController } from 'ionic-angular';
import { Camera } from 'ionic-native';
/**
 * Generated class for the PublicarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-publicar',
  templateUrl: 'publicar.html',
})
export class PublicarPage {
  publicacion = {'photo':''};
  public base64Image:string;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController,public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicarPage');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Pefil',
      buttons: [
        {
          text: 'Camara',
          role: 'camara',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            Camera.getPicture({
              destinationType:Camera.DestinationType.DATA_URL,
              targetWidth: 500,
              targetHeight: 500,
            }).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
          this.base64Image = 'data:image/jpeg;base64,' + imageData;
          this.publicacion.photo = this.base64Image;
          // this.user.set('photo', this.base64Image);
          //   this.user.save();
          //   }, (err) => {
          //   console.log(err);
            });
  
            console.log('camara clicked');
          }
        },{
          text: 'Galeria',
          icon: !this.platform.is('ios') ? 'albums' : null,
          handler: () => {
            Camera.getPicture({
              destinationType : Camera.DestinationType.DATA_URL,
              sourceType:Camera.PictureSourceType.PHOTOLIBRARY,
              targetWidth: 500,
              targetHeight: 500,
            }).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
          this.base64Image = 'data:image/jpeg;base64,' + imageData;
          this.publicacion.photo = this.base64Image;
          // this.user.set('photo', this.base64Image);
          //   this.user.save();
          //   }, (err) => {
          //   console.log(err);
            });
            console.log('galeria clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  dismiss() {
   
   this.viewCtrl.dismiss();
 }

}
