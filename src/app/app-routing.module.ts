// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { AboutGuard } from "./components/home/guards/About.guard";
import { PastsGuard } from "./components/posts/guards/pasts.guard";

// Components
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/home/about/about.component";
import { CustomPreloadingStrategy } from "./components/shared/components/preload-strategy/custom-preloading-strategy";

const routes: Routes = [
  {path: 'posts', canLoad: [PastsGuard],
    loadChildren: () => import('../app/components/posts/posts.module').then(m => m.PostsModule),
    data: {preload: true, delay: 5000}},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent, canActivate: [AboutGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategy,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
