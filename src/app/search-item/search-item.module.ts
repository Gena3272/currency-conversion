// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SearchItemComponent } from './search-item.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    SearchItemComponent,
  ],
  exports: [
    SearchItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class SearchItemModule {}
