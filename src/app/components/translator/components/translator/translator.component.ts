// Angular
import { Component } from '@angular/core';

// Constants
import { ENG, FRA, GER, RUS, TRANSLATE } from "../../constants/constants";

// Services
import { TranslatorService } from "../../services/translator.service";

// Constants
import { DictionaryWord } from "../../constants/dictionary";

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.scss'],
})
export class TranslatorComponent {
  ENG = ENG;
  RUS = RUS;
  FRA = FRA;
  GER = GER;
  TRANSLATE = TRANSLATE;

  constructor(private translatorService: TranslatorService) {}

  targetLanguage(language: string): void {
    this.translatorService.targetLanguage(language);
    this.translateButton(language);
  }

  translateButton(item: string): void {
    DictionaryWord.forEach((translateItem): void => {
      if(item === translateItem.language ) {
        this.TRANSLATE = translateItem.translateButton;
      }
    });
  }
}
