// Angular
import { Injectable } from '@angular/core';

// Constants
import { ENG } from "../constants/constants";

@Injectable({
  providedIn: 'root',
})
export class TranslatorService {
  selectedLanguage = ENG;

  targetLanguage(language: string): void {
    this.selectedLanguage = language;
  }
}
