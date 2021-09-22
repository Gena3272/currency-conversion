// Angular
import { NgModule } from '@angular/core';
// Component
import { AppComponent } from './app.component';
// Module
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from "./header/header.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
