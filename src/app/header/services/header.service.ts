// Angular
import { Injectable } from '@angular/core';

// Constants
import { EURO, HRYVNIA, RU, USD } from "../constants/currency-conversion.constants";

// Models
import { CurrencyConversion } from "../models/currency-conversion.models";

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  // @ts-ignore
  getCurrentValue(userData: CurrencyConversion, resultData: CurrencyConversion): number {
    if(userData.name === RU) {
      return this.getRuData(userData, resultData);
    }

    if(userData.name === USD) {
      return this.getUsdData(userData, resultData);
    }

    if(userData.name === EURO) {
      return this.getEuroData(userData, resultData);
    }

    if(userData.name === HRYVNIA) {
      return this.getHryvniaData(userData, resultData);
    }
  }

  private getUsdData(userData: CurrencyConversion, resultData: CurrencyConversion): number {
    if(resultData.name === RU) {
      return userData.value * 72.40;
    }

    if(resultData.name === EURO) {
      return userData.value * 0.85;
    }

    if(resultData.name === HRYVNIA) {
      return userData.value * 26.1;
    }

    return userData.value;
  }

  private getEuroData(userData: CurrencyConversion, resultData: CurrencyConversion): number {
    if(resultData.name === USD) {
      return userData.value * 1.18;
    }

    if(resultData.name === RU) {
      return userData.value * 85.26;
    }

    if(resultData.name === HRYVNIA) {
      return userData.value * 31.42;
    }

    return userData.value;
  }

  private getHryvniaData(userData: CurrencyConversion, resultData: CurrencyConversion): number {
    if(resultData.name === USD) {
      return userData.value * 0.037;
    }

    if(resultData.name === EURO) {
      return userData.value * 0.032;
    }

    if(resultData.name === RU) {
      return userData.value * 2.71;
    }

    return userData.value;
  }

  private getRuData(userData: CurrencyConversion, resultData: CurrencyConversion): number {
    if(resultData.name === USD) {
      return userData.value * 0.014;
    }

    if(resultData.name === EURO) {
      return userData.value * 0.012;
    }

    if( resultData.name === HRYVNIA) {
      return userData.value * 0.37;
    }

    return userData.value;
  }
}
