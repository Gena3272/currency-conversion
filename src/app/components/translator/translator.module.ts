// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { TranslatePipe } from './pips/translate.pipe';

// Components
import { TranslatorComponent } from './components/translator/translator.component';

@NgModule({
  declarations: [
    TranslatorComponent,
    TranslatePipe,
  ],
  imports: [
    CommonModule,
  ],
})
export class TranslatorModule {}
