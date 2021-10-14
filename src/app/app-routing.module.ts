// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PostsComponent } from "./components/posts/posts.component";
import { PostComponent } from "./components/post/post.component";

const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
