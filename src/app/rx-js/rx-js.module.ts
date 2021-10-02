// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// RxJS
import { RxJsComponent } from './rx-js.component';

@NgModule({
  declarations: [
    RxJsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RxJsComponent,
  ],
})
export class RxJsModule {}
