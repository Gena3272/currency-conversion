// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

// Material
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";

// Store
import { EffectsModule } from "@ngrx/effects";
import { postsEffect } from "./store/effects/posts.effect";

// Components
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    RouterModule,
    MatButtonModule,
    EffectsModule.forRoot([postsEffect]),
  ],
})
export class PostsModule {}
