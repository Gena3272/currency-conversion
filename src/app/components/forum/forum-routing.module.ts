// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

// Services
import { ForumResolveService } from "./services/forum-resolve.service";

// Components
import { ForumComponent } from "./components/forum/forum.component";
import { ForumPostsComponent } from "./components/forum-posts/forum-posts.component";

const routes: Routes = [
  {path: 'forum', component: ForumComponent},
  {path: 'forum-posts', component: ForumPostsComponent, resolve: { forumPosts: ForumResolveService}},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
})
export class ForumRoutingModule {}
