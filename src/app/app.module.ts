// Angular
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

// Component
import { AppComponent } from './app.component';

// Module
import { HeaderModule } from "./header/header.module";
import { MainModule } from "./main/main.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FormsModule,
    MainModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
