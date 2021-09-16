import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header.component";
import { InputsComponent } from './inputs/inputs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    InputsComponent
  ],
  exports: [
    InputsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
