import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicarPage } from './publicar';

@NgModule({
  declarations: [
    PublicarPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicarPage),
  ],
  exports: [
    PublicarPage
  ]
})
export class PublicarPageModule {}
