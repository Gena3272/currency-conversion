// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

// Material
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";

// Store
import { StoreModule } from "@ngrx/store";
import { appReducers } from "../store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
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
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([postsEffect]),
    MatCardModule,
    MatListModule,
    RouterModule,
    MatButtonModule,
  ],
})
export class PostsModule {}
