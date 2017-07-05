import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()

export class ServiceProvider {

  api:string = "https://c-i-kevinoca.c9users.io/appmarket-api/";

  constructor(public http: Http) {

    //

  }

  getProducts(){

    return this.http.get(this.api + 'listado.php').map(res =>res.json().reverse())

  }

  registerProduct(params){

    let headers = new Headers ({'Content-Type':'application/x-www-form-urlencoded'});

    return this.http.post(this.api + "insert.php", params,{headers:headers, method:"POST" }).map((res:Response) => { return res.json();}	
    
    );

	}
  
  getPosts(){

    return this.http.get(this.api + 'posts.php').map(res =>res.json().reverse())

  }

  getPost(id){

    return this.getPosts().filter(function(e,i){ return e.id == id})[0] || {id:null,title:null,text:null};
    // return this.post.object('posts/'+id);
  
  }

  registerPosts(params){

    let headers = new Headers ({'Content-Type':'application/x-www-form-urlencoded'});

    return this.http.post(this.api + "createpost.php", params,{headers:headers, method:"POST" }).map((res:Response) => { return res.json();}	
    
    );

	}

}
