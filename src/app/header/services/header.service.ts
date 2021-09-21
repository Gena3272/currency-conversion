// Angular
import { Injectable } from '@angular/core';

// Constants
import { EURO, HRYVNIA, RU, USD } from "../constants/currency-conversion.constants";

// Models
import { CurrencyConversion } from "../models/currency-conversion.models";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  getUsdData(userData: CurrencyConversion, resultData: CurrencyConversion): number | undefined {
    if(userData.name === USD && resultData.name === RU) {
      resultData.value = userData.value * 72.40;
      return resultData.value;
    }

    if(userData.name === USD && resultData.name === EURO) {
      resultData.value = userData.value * 0.85;
      return resultData.value;
    }

    if(userData.name === USD && resultData.name === HRYVNIA) {
      resultData.value = userData.value * 26.1;
      return resultData.value;
    }
    return
  }
  getEuroData(userData: CurrencyConversion, resultData: CurrencyConversion): number | undefined {
    if(userData.name === EURO && resultData.name === USD) {
      resultData.value = userData.value * 1.18;
      return resultData.value;
    }

    if(userData.name === EURO && resultData.name === RU) {
      resultData.value = userData.value * 85.26;
      return resultData.value;
    }

    if(userData.name === EURO && resultData.name === HRYVNIA) {
      resultData.value = userData.value * 31.42;
      return resultData.value;
    }
    return
  }
  getHryvniaData(userData: CurrencyConversion, resultData: CurrencyConversion): number | undefined {
    if(userData.name === HRYVNIA && resultData.name === USD) {
      resultData.value = userData.value * 0.037;
      return resultData.value;
    }

    if(userData.name === HRYVNIA && resultData.name === EURO) {
      resultData.value = userData.value * 0.032;
      return resultData.value;
    }

    if(userData.name === HRYVNIA && resultData.name === RU) {
      resultData.value = userData.value * 2.71;
      return resultData.value
    }
    return
  }
  getRuData(userData: CurrencyConversion, resultData: CurrencyConversion): number | undefined {
    if(userData.name === RU && resultData.name === USD) {
      resultData.value = userData.value * 0.014;
      return resultData.value;
    }

    if(userData.name === RU && resultData.name === EURO) {
      resultData.value = userData.value * 0.012;
      return resultData.value;
    }

    if(userData.name === RU && resultData.name === HRYVNIA) {
      resultData.value = userData.value * 0.37;
      return resultData.value;
    }
    return
  }
  getCurrentValue(userData: CurrencyConversion, resultData: CurrencyConversion): void {
    this.getEuroData(userData, resultData);
    this.getUsdData(userData, resultData);
    this.getHryvniaData(userData, resultData);
    this.getRuData(userData, resultData);
  }
}
