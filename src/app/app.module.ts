// Angular
import { NgModule } from '@angular/core';
// Component
import { AppComponent } from './app.component';
// Module
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from "./header/header.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
