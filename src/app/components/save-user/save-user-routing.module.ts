// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

// Guards
import { SaveFormGuard } from "./guards/save-form.guard";

// Components
import { CreateFormComponent } from "./components/create-form/create-form.component";

const routes: Routes = [
  {path: 'create-form', component: CreateFormComponent, canDeactivate: [SaveFormGuard]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
})
export class SaveUserRoutingModule {}
