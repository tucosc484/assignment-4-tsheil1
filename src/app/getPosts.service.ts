import { Component, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post'
@Component({
  selector: 'post',
  template: `<p>test</p>`  
})

@Injectable({
  providedIn: 'root',
})

export class GetPostsService {
  constructor(private http: HttpClient){}
  
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe();
  }

  getComments(postId: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + postId).pipe();
  }
}



