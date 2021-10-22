// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

// Guards
import { FeedBackRequestGuard } from "./guards/feed-back-request.guard";

// Components
import { FeedBackRequestComponent } from "./components/feed-back-request/feed-back-request.component";

const routes: Routes = [
  {path: 'feed-back-request', component: FeedBackRequestComponent, canDeactivate: [FeedBackRequestGuard]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
})
export class FeedBackRequestRoutingModule {}
