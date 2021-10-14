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
import { PostsDataModule } from "./components/posts/posts-data.module";
import { AppRoutingModule } from "./app-routing.module";
import { PostDataModule } from "./components/post/post-data.module";


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
    PostsDataModule,
    PostDataModule,
    MatButtonModule,
    MatIconModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
