// Angular
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslatorService {
  selectedLanguage: string;

  targetLanguage(language: string): void {
    this.selectedLanguage = language;
  }
}
