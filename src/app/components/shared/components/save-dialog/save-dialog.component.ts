// Angular
import { Component } from '@angular/core';

// Services
import { CreateFormService } from "../../../save-user/services/create-form.service";

@Component({
  selector: 'app-save-dialog',
  templateUrl: './save-dialog.component.html',
  styleUrls: ['./save-dialog.component.scss'],
})
export class  SaveDialogComponent {
  constructor(private createFormService: CreateFormService) {}

  onClearForm(): void {
    this.createFormService.isClose$.next(true);
  }

  onSaveForm(): void {
    this.createFormService.checkSavedForm = true;
  }
}
