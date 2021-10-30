// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

// components
import { PostsComponent } from "./posts.component";
import { PostComponent } from "../post/post.component";

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: ':id', component: PostComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
})
export class PastsRoutingModule {}
