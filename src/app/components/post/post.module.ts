// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

// Components
import { PostComponent } from "./post.component";

@NgModule({
  declarations: [
    PostComponent,
  ],
  exports: [
    PostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
  ],
})
export class PostModule {}
