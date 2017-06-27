import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TimelinePage } from '../timeline/timeline';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  login(){
    this.navCtrl.push(TimelinePage);
}

}
