// Angular
import { NgModule } from '@angular/core';

// Module
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ClickIntervalDataComponent } from "./clickIntervalData/clickIntervalData.component";

@NgModule({
  declarations: [
    MainComponent,
    ClickIntervalDataComponent,
  ],
  exports: [
    MainComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class MainModule {}
