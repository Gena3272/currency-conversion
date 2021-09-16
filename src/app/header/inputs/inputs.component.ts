import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { HeaderService } from "../services/header.service";

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnChanges{
  @Input() initialState = true;
  @Output() swapSelect = new EventEmitter<void>();
  objFirstCurrencyValue = {name: 'euro', value: ''};
  objSecondCurrencyValue = {name: 'usd', value: ''};
  isDisabled: boolean = true;
  USERDATA = 'userDataAboutCurrency';
  constructor(private headerService: HeaderService) {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.objFirstCurrencyValue, '1');
    console.log(this.objSecondCurrencyValue, '2');
  }

  onSelect(value: any, type: string) {
    if(type === this.USERDATA){
      if(this.objSecondCurrencyValue.name === value) {
        this.swapSelect.emit();
        return
      }
      this.objFirstCurrencyValue.name = value;
    } else {
      if(this.objSecondCurrencyValue.name === value) {
        this.swapSelect.emit();
        return
      }
      this.objSecondCurrencyValue.name = value;
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
