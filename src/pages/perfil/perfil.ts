import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform, ToastController, MenuController   } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';



import { LoginPage } from '../login/login';
import { TimelinePage } from '../timeline/timeline';
import { SearchPage } from '../search/search';

/**
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  
  dates = { photo:'',name:'',password:'',password2:'',age:'',height:'',country:'',phone:'',gender:'',comment:'',rol:''}
  public base64Image:string;
  correo;
  nombre;
  prueba1;
  constructor(public alertCtrl: AlertController,public storage: Storage,public navCtrl: NavController, public navParams: NavParams,
  public actionSheetCtrl: ActionSheetController,public auth: Auth,public user: User, public loadingCtrl: LoadingController,
  public toastCtrl: ToastController, public platform: Platform,public menuCtrl: MenuController) {
  
    if (this.auth.isAuthenticated()) {
          

            console.log(this.user);
            this.dates.photo = this.user.get('photo' , '');
            this.nombre = this.user.details.name;
            this.correo = this.user.details.email;
            this.dates.name = this.user.details.name;
            this.dates.password = this.user.details.password
            this.dates.password2 = this.user.get('password2','')
            this.dates.age = this.user.get('age','')
            this.dates.height = this.user.get('height','')
            this.dates.country = this.user.get('country','')
            this.dates.phone = this.user.get('phone','')
            this.dates.gender = this.user.get('gender','')
            this.dates.comment = this.user.get('comment','')
            this.dates.rol = this.user.get('rol','')
            if(this.dates.photo == null){
              this.dates.photo = this.user.details.image;
            }

            // this.img = this.user.details.image;
            
          }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }
  accountt(){
    let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });
    loading.present().then(() => {

    this.user.details.name = this.dates.name;
    this.user.details.password = this.dates.password;
    this.user.set('password2', this.dates.password2);
    this.user.set('age', this.dates.age);
    this.user.set('height', this.dates.height);
    this.user.set('country', this.dates.country);
    this.user.set('phone', this.dates.phone);
    this.user.set('gender', this.dates.gender);
    this.user.set('comment', this.dates.comment);
    this.user.set('rol', this.dates.rol);
    this.user.save(); 
    loading.dismiss();
   });
   let toast = this.toastCtrl.create({
        message: 'Successful registre',
        duration: 3500,
        position: 'top'
        });
        toast.present();
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
          this.dates.photo = this.base64Image;
          this.user.set('photo', this.base64Image);
            this.user.save();
            }, (err) => {
            console.log(err);
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
          this.dates.photo = this.base64Image;
          this.user.set('photo', this.base64Image);
            this.user.save();
            }, (err) => {
            console.log(err);
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
  // prueba(){
  //   this.storage.set('prueba1','hola mundo');
  //   console.log(this.storage);
  // }
  // prueba2(){
  //   this.storage.get('prueba1').then((data)=>{
  //   console.log(data);
  //   });
  // }
  salir(){
    let confirm = this.alertCtrl.create({
      title: 'Salir de la App?',
      message: 'Usted esta saliendo de esta applicacion, esta usted seguro?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Logout',
          handler: () => {
            console.log('Agree clicked');
            console.log('salir');
            this.menuCtrl.enable(false);
            this.auth.logout();
            this.navCtrl.push(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }
  timeline(){
    this.navCtrl.push(TimelinePage);
  }
  search(){
    this.navCtrl.push(SearchPage);
  }
}
