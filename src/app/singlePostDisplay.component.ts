import { Component, Input } from '@angular/core';
import { GetPostsService } from './getPosts.service';
import { Post } from './post';
import { displayCommentsComponent } from './displayComments.component';

@Component({
  selector: 'displayPost',
  template: `<h1>Hello {{name}}!</h1>`,

})
export class singlePostDisplayComponent  {

  posts: Post[];
  constructor(private service: GetPostsService) {}

  getPosts(): void {
    this.service.getPosts()
    .subscribe(posts => this.posts = posts);
  }
  
}
