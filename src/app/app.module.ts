// Angular
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

// Component
import { AppComponent } from './app.component';

// Module
import { HeaderModule } from "./header/header.module";
import { CustomerActionsDataModule } from "./customer-actions-data/ccustomer-actions-data.module";
import { RxJsModule } from "./rx-js/rx-js.module";

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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
