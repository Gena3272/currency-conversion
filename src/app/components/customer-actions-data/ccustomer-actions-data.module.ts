// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CustomerActionsDataComponent } from "./сustomer-actions-data.component";

@NgModule({
  declarations: [
    CustomerActionsDataComponent,
  ],
  exports: [
    CustomerActionsDataComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class CustomerActionsDataModule {}
