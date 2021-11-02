import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormRoutingModule } from "./registration-form-routing.module";
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [
    RegistrationFormComponent,
  ],
  imports: [
    CommonModule,
    RegistrationFormRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    RegistrationFormRoutingModule,
  ]
})
export class RegistrationFormModule {}
