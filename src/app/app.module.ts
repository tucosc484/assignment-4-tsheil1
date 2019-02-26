import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GetPostsService } from './getPosts.service';
import { singlePostDisplayComponent } from './singlePostDisplay.component';
import { displayAllPostsComponent } from './displayAllPosts.component';
import { displayCommentsComponent } from './displayComments.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, GetPostsService, singlePostDisplayComponent, displayAllPostsComponent, displayCommentsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
