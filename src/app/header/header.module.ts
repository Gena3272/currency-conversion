// Angular
import { NgModule } from '@angular/core';

// Component
import { HeaderComponent } from "./header.component";
import { CurrencyConversionComponent } from './currencyConversion/currencyConversion.component';

// Module
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    CurrencyConversionComponent,
  ],
  exports: [
    CurrencyConversionComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class HeaderModule {}
