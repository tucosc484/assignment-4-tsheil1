import { Component } from '@angular/core';
import { GetPostsService } from './getPosts.service'
import { Comment } from './comment';

@Component({
  selector: 'comments',
  template: ``,
  styles: [`h1 { font-family: Lato; }`]
})
export class displayCommentsComponent  {
  comments: Comment[];
  constructor(private service: GetPostsService) {}

  getComments(postId: number): void {
    this.service.getComments(postId)
    .subscribe(comments => this.comments = comments);
  }
}
