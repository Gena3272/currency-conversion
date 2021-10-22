// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

// Material
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

// Modules
import { SharedModule } from "../shared/shared.module";
import { FeedBackRequestRoutingModule } from "./feed-back-request-routing.module";

// Components
import { FeedBackRequestComponent } from './components/feed-back-request/feed-back-request.component';
import { FeedBackRequestDialogComponent } from "../shared/components/feed-back-request-dialog/feed-back-request-dialog.component";

@NgModule({
  declarations: [
    FeedBackRequestComponent,
    FeedBackRequestDialogComponent,
  ],
  entryComponents: [
    FeedBackRequestDialogComponent,
  ],
  imports: [
    CommonModule,
    FeedBackRequestRoutingModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    FeedBackRequestRoutingModule,
    FeedBackRequestComponent,
  ],
})
export class FeedBackRequestModule {}
