// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { AboutGuard } from "./components/home/guards/About.guard";

// Components
import { PostsComponent } from "./components/posts/posts.component";
import { PostComponent } from "./components/post/post.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/home/about/about.component";

const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent, canActivate: [AboutGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
