import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Perfil3rosPage } from './perfil3ros';

@NgModule({
  declarations: [
    Perfil3rosPage,
  ],
  imports: [
    IonicPageModule.forChild(Perfil3rosPage),
  ],
  exports: [
    Perfil3rosPage
  ]
})
export class Perfil3rosPageModule {}
