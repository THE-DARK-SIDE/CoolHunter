import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchmodalPage } from './searchmodal';

@NgModule({
  declarations: [
    SearchmodalPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchmodalPage),
  ],
  exports: [
    SearchmodalPage
  ]
})
export class SearchmodalPageModule {}
