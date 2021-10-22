// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

// Guards
import { CreateFormGuard } from "./guards/create-form.guard";

// Components
import { CreateFormComponent } from "./components/create-form/create-form.component";

const routes: Routes = [
  {path: 'create-form', component: CreateFormComponent, canDeactivate: [CreateFormGuard]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
})
export class SaveUserRoutingModule {}
