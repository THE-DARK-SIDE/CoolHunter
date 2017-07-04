import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database/database";

@Injectable()

export class PostsService{

    constructor(public  afDB: AngularFireDatabase){

        
    }

    posts = [];
    users = [];

    public getPosts(){

        // return this.posts;
        // this.afDB.list("posts/").map( (arr) => { return arr.reverse(); } );
        return this.afDB.list("posts/");

    }

    public getUsers(){

        return this.afDB.list("users/");

    }

    public getPost(id){

        // return this.posts.filter(function(e,i){ return e.id == id})[0] || {id:null,title:null,text:null};
        return this.afDB.object('posts/'+id);

    
    }

    public getUser(id){

        // return this.posts.filter(function(e,i){ return e.id == id})[0] || {id:null,title:null,text:null};
        return this.afDB.object('users/'+id);

    }

    public createPost(post){

        // this.posts.push(post)
        this.afDB.database.ref("posts/" + post.id).set(post);

    }

    public editPost(post){

        // for(let i = 0; i < this.posts.length; i++){

        //     if(this.posts[i].id == post.id){

        //         this.posts[i] = post;

        //     }

        // }

        this.afDB.database.ref("posts/" + post.id).set(post);
    
    }

    public deletePost(post){

        // for(let i = 0; i < this.posts.length; i++){

        //     if(this.posts[i].id == post.id){

        //         this.posts.splice(i,1);

        //     }

        // }

        this.afDB.database.ref("posts/" + post.id).remove();

    }

}