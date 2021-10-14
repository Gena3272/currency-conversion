// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PostsDataComponent } from "./components/posts/posts-data.component";
import { PostDataComponent } from "./components/post/post-data.component";

const routes: Routes = [
  {path: 'posts', component: PostsDataComponent},
  {path: 'posts/:id', component: PostDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
