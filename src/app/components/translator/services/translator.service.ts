// Angular
import { Injectable } from '@angular/core';

// Models
import { Dictionary} from "../models/translator";

// Constants
import { ENG, FRE, RUS } from "../constants/constants";

@Injectable({
  providedIn: 'root',
})
export class TranslatorService {
  selectedLanguage: string;
  dictionary: Dictionary[] = [
    {
      language: RUS,
      value: 'Угловой'
    },
     {
       language: ENG,
       value: 'Angular',
     },
    {
      language: FRE,
      value: 'Angulaire',
    },
];

  targetLanguage(language: string): void {
    this.selectedLanguage = language;
  }
}
