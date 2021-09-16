import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  getCurrentValue(firstValue: any, secondValue: any): any {
    if(firstValue.name === 'usd' && secondValue.name === 'ru') {
      return secondValue.value = firstValue.value * 72.40
    }
    if(firstValue.name === 'usd' && secondValue.name === 'euro') {
      return secondValue.value = firstValue.value * 0.85
    }
    if(firstValue.name === 'usd' && secondValue.name === 'hryvnia') {
      return secondValue.value = firstValue.value * 26.1
    }

    if(firstValue.name === 'euro' && secondValue.name === 'usd') {
      return secondValue.value = firstValue.value * 1.18
    }
    if(firstValue.name === 'euro' && secondValue.name === 'ru') {
      return secondValue.value = firstValue.value * 85.26
    }
    if(firstValue.name === 'euro' && secondValue.name === 'hryvnia') {
      return secondValue.value = firstValue.value * 31.42
    }

    if(firstValue.name === 'hryvnia' && secondValue.name === 'usd') {
      return secondValue.value = firstValue.value * 0.037
    }
    if(firstValue.name === 'hryvnia' && secondValue.name === 'euro') {
      return secondValue.value = firstValue.value * 0.032
    }
    if(firstValue.name === 'hryvnia' && secondValue.name === 'ru') {
      return secondValue.value = firstValue.value * 2.71
    }

    if(firstValue.name === 'ru' && secondValue.name === 'usd') {
      return secondValue.value = firstValue.value * 0.014
    }
    if(firstValue.name === 'ru' && secondValue.name === 'euro') {
      return secondValue.value = firstValue.value * 0.012
    }
    if(firstValue.name === 'ru' && secondValue.name === 'hryvnia') {
      return secondValue.value = firstValue.value * 0.37
    }
  }
}
