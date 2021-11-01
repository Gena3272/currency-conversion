// Angular
import { Pipe, PipeTransform } from '@angular/core';

// Services
import { TranslatorService } from "../services/translator.service";

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {

  constructor(private translatorService: TranslatorService) {}

  transform(word: string): string {
    this.translatorService.dictionary.forEach((translation): void => {
      if(this.translatorService.selectedLanguage === translation.language ) {

        word = translation.value;
      }
    });

    return word;
  }
}
