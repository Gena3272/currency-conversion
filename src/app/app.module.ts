// Angular
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

// Component
import { AppComponent } from './app.component';

// Module
import { HeaderModule } from "./components/header/header.module";
import { CustomerActionsDataModule } from "./components/customer-actions-data/ccustomer-actions-data.module";
import { RxJsModule } from "./components/rx-js/rx-js.module";
import { AppRoutingModule } from "./app-routing.module";
import { SearchItemModule } from "./components/search-item/search-item.module";
import { HomeModule } from "./components/home/home.module";
import { FeedBackRequestModule } from "./components/forms/feed-back-request.module";
import { DashboardModule } from "./components/dashboard/dashboard.module";
import { SharedModule } from "./components/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FormsModule,
    CustomerActionsDataModule,
    RxJsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    SearchItemModule,
    HomeModule,
    FeedBackRequestModule,
    DashboardModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
