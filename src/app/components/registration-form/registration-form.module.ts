// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

// Material
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

// Modules
import { RegistrationFormRoutingModule } from "./registration-form-routing.module";

// Components
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { HomeDialogComponent } from "../shared/components/home-dialog/home-dialog.component";

@NgModule({
  declarations: [
    RegistrationFormComponent,
  ],
  entryComponents: [
    HomeDialogComponent,
  ],
  imports: [
    CommonModule,
    RegistrationFormRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    RegistrationFormRoutingModule,
  ],
})
export class RegistrationFormModule {}
