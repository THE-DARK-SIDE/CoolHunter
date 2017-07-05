import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Auth, User } from '@ionic/cloud-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';
import { RegistroPage } from '../pages/registro/registro';
import { TimelinePage } from '../pages/timeline/timeline';
import { SearchPage } from '../pages/search/search';
import { LostpassPage } from '../pages/lostpass/lostpass';
import { PopoverPage } from '../pages/popover/popover';
import { ModalPage } from '../pages/modal/modal';
import { SearchmodalPage } from '../pages/searchmodal/searchmodal';
import { DetailPage } from '../pages/detail/detail';
import { PublicarPage } from '../pages/publicar/publicar';
import { Perfil3rosPage } from '../pages/perfil3ros/perfil3ros';

// import { PostsService } from '../services/posts.service';
import { ServiceProvider } from '../providers/service/service';

export const firebaseConfig = {
  apiKey: "AIzaSyBKO28EsR4sF_Fd5lYKpvdv6NdrvBqOzmk",
  authDomain: "cool-hunter-ae940.firebaseapp.com",
  databaseURL: "https://cool-hunter-ae940.firebaseio.com",
  storageBucket: "cool-hunter-ae940.appspot.com",
  messagingSenderId: '163958807996'
};

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'd5fff336'
  }
  //   'push': {
  //   'sender_id': '171363184724',
  //   'pluginConfig': {
  //     'ios': {
  //       'badge': true,
  //       'sound': true
  //     },
  //     'android': {
  //       'iconColor': '#343434'
  //     }
  //   }
  // }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PerfilPage,
    RegistroPage,
    TimelinePage,
    SearchPage,
    LostpassPage,
    PopoverPage,
    ModalPage,
    SearchmodalPage,
    DetailPage,
    PublicarPage,
    Perfil3rosPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    CloudModule.forRoot(cloudSettings),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PerfilPage,
    RegistroPage,
    TimelinePage,
    SearchPage,
    LostpassPage,
    PopoverPage,
    ModalPage,
    SearchmodalPage,
    DetailPage,
    PublicarPage,
    Perfil3rosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // PostsService,
    ServiceProvider
  ]
})
export class AppModule {}
