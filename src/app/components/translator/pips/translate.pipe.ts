// Angular
import { Pipe, PipeTransform } from '@angular/core';

// Services
import { TranslatorService } from "../services/translator.service";

// Constants
import { DictionaryWord } from "../constants/dictionary";

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {

  constructor(private translatorService: TranslatorService) {}

  transform(word: string): string {
      const translatedWord = DictionaryWord.find((translateItem) => this.translatorService.selectedLanguage === translateItem.language);

      return translatedWord.value;
    }
}
