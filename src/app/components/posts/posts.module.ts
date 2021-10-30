// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

// Material
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";

// Components
import { PostsComponent } from "./posts.component";
import { PastsRoutingModule } from "./pasts-routing.module";


@NgModule({
  declarations: [
    PostsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatListModule,
    PastsRoutingModule,
  ],
  exports: [
    PostsComponent,
    PastsRoutingModule,
  ],
})
export class PostsModule {}
