// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";

// Components
import { PostsDataComponent } from "./posts-data.component";


@NgModule({
  declarations: [
    PostsDataComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatListModule,
  ],
  exports: [
    PostsDataComponent,
  ],
})
export class PostsDataModule {}
