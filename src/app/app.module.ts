import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Auth, User } from '@ionic/cloud-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

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
    SearchmodalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
    CloudModule.forRoot(cloudSettings)
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
    SearchmodalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
