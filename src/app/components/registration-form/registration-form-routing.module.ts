// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

// Guards
import { RegistrationFormGuard } from "./guards/registration-form.guard";

// Components
import { RegistrationFormComponent } from "./components/registration-form/registration-form.component";

const routes: Routes = [
  {path: 'registration', component: RegistrationFormComponent, canDeactivate: [RegistrationFormGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
})
export class RegistrationFormRoutingModule {}
