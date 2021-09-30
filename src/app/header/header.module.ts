// Angular
import { NgModule } from '@angular/core';

// Component
import { HeaderComponent } from "./header.component";
import { CurrencyConversionComponent } from './currencyConversion/currencyConversion.component';
import { FormsUserComponent } from './forms-user/forms-user.component';
// Module
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HeaderComponent,
    CurrencyConversionComponent,
    FormsUserComponent,
  ],
  exports: [
    CurrencyConversionComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class HeaderModule {}
