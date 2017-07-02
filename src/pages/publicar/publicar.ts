import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform, ViewController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { PostsService } from '../../services/posts.service';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';


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

  post = {id:null,title:null,text:null};

  id = null;

  dates = { photo:''}

  correo;

  nombre;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams,
  public actionSheetCtrl: ActionSheetController,public platform: Platform, public postsService: PostsService,
  public auth: Auth,public user: User) {

     if (this.auth.isAuthenticated()) {
          
            console.log(this.user);
            this.dates.photo = this.user.get('photo' , '');
            this.nombre = this.user.details.name;
            this.correo = this.user.details.email;
           
            if(this.dates.photo == null){
              this.dates.photo = this.user.details.image;
            }
            
          }
    //
    this.id = navParams.get("id");

    if(this.id != 0){
      
      postsService.getPost(this.id).subscribe(post =>{this.post = post;})

    }

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

  addPost(){

    if(this.id != 0){
          
      // this.post.id = Date.now();
      this.postsService.editPost(this.post)
      alert("nota editada")

    }else{

      this.post.id = Date.now();
      this.postsService.createPost(this.post)
      alert("nota creada")

    }

      this.navCtrl.pop();

  }

  deletePost(){

    this.postsService.deletePost(this.post);
    alert("nota creada")
    this.navCtrl.pop();

  }

}
