// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

// Material
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

// Modules
import { SharedModule } from "../shared/shared.module";
import { SaveUserRoutingModule } from "./save-user-routing.module";

// Components
import { CreateFormComponent } from './components/create-form/create-form.component';
import { SaveDialogComponent } from "../shared/components/save-dialog/save-dialog.component";

@NgModule({
  declarations: [
    CreateFormComponent,
    SaveDialogComponent,
  ],
  entryComponents: [
    SaveDialogComponent,
  ],
  imports: [
    CommonModule,
    SaveUserRoutingModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    SaveUserRoutingModule,
    CreateFormComponent,
  ],
})
export class SaveUserModule {}
