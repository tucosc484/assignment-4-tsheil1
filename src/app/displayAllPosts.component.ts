import { Component, OnInit, Input } from '@angular/core';
import { GetPostsService } from './getPosts.service';
import { Post } from './post';
import { displayCommentsComponent } from './displayComments.component';
@Component({
  selector: 'allPosts',
  template: `
    <div *ngIf="displayAll">
      <div *ngFor="let post of posts">
        <div [ngClass]="'postBox'">
          <h3>{{post.title}}</h3>
          <p>{{post.body}}</p>
          <button (click)="postChosen(post)">Read Comments</button>
        </div>
      </div>
    </div>
    <div *ngIf="displayOne">
      <button (click)="goBack()">Go back</button>
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
      <div *ngFor="let comment of comments" class="commentBox">
        <p>{{comment.name}} -- {{comment.email}}</p>
        <p>{{comment.body}}</p>
      </div>
    </div>
  `
})
export class displayAllPostsComponent  {

  posts: Post[];
  post: Post;
  comments: Comment[];
  constructor(private service: GetPostsService) {}
  displayAll = true;
  displayOne = false;
  currentPost = 0;

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.service.getPosts()
    .subscribe(posts => this.posts = posts);
  }
  
  getComments(postId: number): void {
    this.service.getComments(postId)
    .subscribe(comments => this.comments = comments);
  }

  postChosen(current: Post) {
    this.displayAll = false;
    this.post = current;
    this.displayOne = true;
    this.getComments(current.id);
  }

  goBack() {
    this.displayOne = false;
    this.displayAll = true;
  }
}
