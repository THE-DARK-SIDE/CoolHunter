import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TimelinePage } from '../pages/timeline/timeline';
import { PerfilPage } from '../pages/perfil/perfil';
import { HomePage } from '../pages/home/home';
import { Auth, User } from '@ionic/cloud-angular';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TimelinePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public auth: Auth, public user: User) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
       if (this.auth.isAuthenticated()) {
        // this.user is authenticated!
        // console.log(this.user.id);
  
        this.rootPage = PerfilPage;
        
      }else{
        this.rootPage = HomePage;
      }
    });
  }
}

