import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostsService } from '../../services/posts.service';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  post = {id:null,title:null,text:null};

  id = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public postsService: PostsService) {
    
    this.id = navParams.get("id");

    if(this.id != 0){
      
      postsService.getPost(this.id).subscribe(post =>{this.post = post;})

    }

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
