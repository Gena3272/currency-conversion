// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

// Module
import { SharedModule } from "../shared/shared.module";

// Components
import { HomeComponent } from "./home.component";
import { AboutComponent } from './about/about.component';
import { HomeDialogComponent } from "../shared/components/home-dialog/home-dialog.component";

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    HomeDialogComponent,
  ],
  entryComponents: [
    HomeDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule {}
