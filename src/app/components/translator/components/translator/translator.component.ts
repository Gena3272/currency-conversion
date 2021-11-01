// Angular
import { Component } from '@angular/core';

// Constants
import { ENG, FRE, GER, RUS } from "../../constants/constants";

// Services
import { TranslatorService } from "../../services/translator.service";

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.scss'],
})
export class TranslatorComponent {
  ENG = ENG;
  RUS = RUS;
  FRE = FRE;
  GER = GER;

  constructor(private translatorService: TranslatorService) {}

  targetLanguage(language: string): void {
    this.translatorService.targetLanguage(language);
  }
}
