// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";

// Components
import { PostsComponent } from "./posts.component";


@NgModule({
  declarations: [
    PostsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatListModule,
  ],
  exports: [
    PostsComponent,
  ],
})
export class PostsModule {}
