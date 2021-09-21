// Angular
import { Component, EventEmitter, Input, Output } from '@angular/core';

// Constants
import { EURO, USD } from "../constants/currency-conversion.constants";

// Service
import { HeaderService } from "../services/header.service";

// Models
import { CurrencyConversion } from "../models/currency-conversion.models";

const USERDATA = 'userDataAboutCurrency';

@Component({
  selector: 'app-inputs',
  templateUrl: './currencyConversion.component.html',
  styleUrls: ['./currencyConversion.component.scss'],
})
export class CurrencyConversionComponent {
  @Input() defaultCurrencyPosition = true;
  @Output() swapActiveCurrencyConversion = new EventEmitter<void>();

  activeConvertibleCurrency: CurrencyConversion = {name: EURO, value: 0};
  convertibleCurrencyResult: CurrencyConversion = {name: USD, value: 0};
  isDisabled = true;

  constructor(private headerService: HeaderService) {}

  onSelect(name: string, type: string) {
    if(type === USERDATA) {
      this.activeConvertibleCurrency.name = name;
      if (this.convertibleCurrencyResult.name === name) {
        this.swapActiveCurrencyConversion.emit();
      }
      return;
    }
    this.convertibleCurrencyResult.name = name;
    if (this.activeConvertibleCurrency.name === name) {
      this.swapActiveCurrencyConversion.emit();
    }
  }

  onExchange(value: any, type: string): void {
    if(type === USERDATA) {
      this.activeConvertibleCurrency.value = value;
      this.headerService.getCurrentValue(this.activeConvertibleCurrency,
      this.convertibleCurrencyResult);
    } else {
      this.convertibleCurrencyResult.value = value;
      this.headerService.getCurrentValue(this.activeConvertibleCurrency,
      this.convertibleCurrencyResult);
    }
  }
}
