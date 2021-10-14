// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

// Components
import { PostDataComponent } from "./post-data.component";

@NgModule({
  declarations: [
    PostDataComponent,
  ],
  exports: [
    PostDataComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
  ],
})
export class PostDataModule {}
