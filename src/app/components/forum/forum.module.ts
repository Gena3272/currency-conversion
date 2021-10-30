// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

// Modules
import { ForumRoutingModule } from "./forum-routing.module";

// Components
import { ForumComponent } from './components/forum/forum.component';
import { ForumPostsComponent } from './components/forum-posts/forum-posts.component';

@NgModule({
  declarations: [
    ForumComponent,
    ForumPostsComponent,
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    RouterModule,
  ],
  exports: [
    ForumRoutingModule,
  ],
})
export class ForumModule {}
