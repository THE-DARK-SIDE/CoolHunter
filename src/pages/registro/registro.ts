import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
	dates = { email:'', password:'',nombre:'',password2:''}

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public auth: Auth, public user: User,public toastCtrl: ToastController) {
	
 }
		
  ionViewDidLoad() {
    console.log('ionViewDidLoad Registro');
  }
  
 registrar(){
	 
	//   let loader = this.loadingCtrl.create({
	// 	  content: "Cargando..."
	//   });
	//   loader.present();
	 // console.log(this.dates);
		if(this.dates != null){	  
			  if(this.dates.email != undefined){
				
				  let details: UserDetails = { 'email': this.dates.email, 'password': this.dates.password ,'name': this.dates.nombre, 'custom':	{'password2': this.dates.password2 }	};
				
					if(this.dates.password == this.dates.password2){
							
							this.auth.signup(details ).then(() => {
								
							
								// `this.user` is now 
								console.log(details);
								console.log(this.user.details);
								// this.user.set('usuario', 'this.dates.usuario');
								// this.user.save();
								this.navCtrl.push(LoginPage);
								//loader.dismiss();
								console.log('Registro Exitoso');
								let toast = this.toastCtrl.create({
											message: 'Registro Exitoso',
											duration: 3000
									});
									toast.present();
									//loader.dismiss();
							}, (err: IDetailedError<string[]>) => {
								for (let e of err.details) {
									if (e === 'conflict_email') {
											console.log('Este Email Esta Registrado');
										let toast = this.toastCtrl.create({
											message: 'Este Email Esta Registrado',
											duration: 3000
									});
								toast.present();
										
									} else {
										// handle other errors
											console.log('Verifique sus datos');
											let toast = this.toastCtrl.create({
												message: 'Verifique sus datos',
												duration: 3000
										});
										toast.present();
									
									}
								}
								
							});
						}else{
						console.log('Contrasena incorrecta');
						let toast = this.toastCtrl.create({
						message: 'Contrasena incorrecta',
						duration: 3000
						});
						toast.present();
						}
					
			  }
		}
		//loader.dismiss();
  }
  loginConFacebook(){
    this.auth.login('facebook').then(()=>{
      const full_name = this.user.social.facebook.data.full_name;
      const profile_picture = this.user.social.facebook.data.profile_picture;
      const full_email = this.user.social.facebook.data.email;
    });
     let toast = this.toastCtrl.create({
        message: 'Successful login',
        duration: 3000,
         position: 'top'
        });
        toast.present();
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