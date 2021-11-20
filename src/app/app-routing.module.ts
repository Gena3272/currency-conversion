// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { AboutGuard } from "./components/home/guards/About.guard";
import { PostsGuard } from "./components/posts/guards/posts.guard";

// Components
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/home/about/about.component";
import { CustomPreloadingStrategy } from "./components/shared/components/preload-strategy/custom-preloading-strategy";
import { TranslatorComponent } from "./components/translator/components/translator/translator.component";
import { PostsComponent } from "./components/posts-user/components/posts/posts.component";
import { PostComponent } from "./components/posts-user/components/post/post.component";

const routes: Routes = [
  {path: 'posts', canLoad: [PostsGuard],
    loadChildren: () => import('../app/components/posts/posts.module').then(m => m.PostsModule),
    data: {preload: true, delay: 5000}},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent, canActivate: [AboutGuard]},
  {path: 'translator', component: TranslatorComponent},
  {path: 'posts-user', component: PostsComponent},
  {path: 'posts-user/:id', component: PostComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategy,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
