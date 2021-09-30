// Angular
import { NgModule } from '@angular/core';

// Module
import { CommonModule } from '@angular/common';

// Components
import { AbstractTasksComponent } from './abstract-tasks/abstract-tasks.component';
import { MainComponent } from "./main.component";
import { CustomerActionsDataComponent } from "./customer-actions-data/сustomerActionsData.component";

@NgModule({
  declarations: [
    MainComponent,
    AbstractTasksComponent,
    CustomerActionsDataComponent,
    MainComponent,
  ],
  exports: [
    MainComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class MainModule {}
