import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderService } from "../services/header.service";

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent {
  @Input() initialState = true;
  @Output() swapSelect = new EventEmitter<void>();

  objFirstCurrencyValue = {name: 'euro', value: ''};
  objSecondCurrencyValue = {name: 'usd', value: ''};
  isDisabled: boolean = true;
  USERDATA = 'userDataAboutCurrency';

  constructor(private headerService: HeaderService) {
  }

  onSelect(value: string, type: string) {
    if(type === this.USERDATA) {
      this.objFirstCurrencyValue.name = value;
      if (this.objSecondCurrencyValue.name === value) {
        this.swapSelect.emit();
      }
      return;
    }
    this.objSecondCurrencyValue.name = value;
    if (this.objFirstCurrencyValue.name === value) {
      this.swapSelect.emit();
    }
  }

  onExchange(value: any, type: string) {
    if(type === this.USERDATA) {
      this.objFirstCurrencyValue.value = value;
      this.headerService.getCurrentValue(this.objFirstCurrencyValue, this.objSecondCurrencyValue);
    } else {
      this.objSecondCurrencyValue.value = value;
      this.headerService.getCurrentValue(this.objFirstCurrencyValue, this.objSecondCurrencyValue);
    }
  }
}
