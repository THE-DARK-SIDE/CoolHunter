import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';


/**
 * Generated class for the PopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }
  
  otherShare(){
    // share(message, subject, file, url)
    this.socialSharing.share("Testing, sharing this from inside an app I'm building right now", null, "www/assets/img/hulk.jpg", null)
    .then(
      ()=>{alert("success");
  },()=>{alert("Failed")}); 
}
  twitterShare(){
    this.socialSharing.shareViaTwitter("share for twitter", "www/assets/img/hulk.jpg", null /*url*/)
    .then(
      ()=>{alert("success");
  },()=>{alert("Failed")}); 
}
  instagramShare(){
    this.socialSharing.shareViaInstagram("share for instagram", "www/assets/img/hulk.jpg")
        .then(
      ()=>{alert("success");
  },()=>{alert("Failed")});
}
  facebookShare(){
    this.socialSharing.shareViaFacebook("share for facebook", "www/assets/img/hulk.jpg",null /*url*/)
        .then(
      ()=>{alert("success");
  },()=>{alert("Failed")});
  }

}
