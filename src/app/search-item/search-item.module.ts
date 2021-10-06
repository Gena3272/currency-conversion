// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

// Components
import { SearchItemComponent } from './search-item.component';

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
