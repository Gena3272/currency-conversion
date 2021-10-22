// Angular
import { Component } from '@angular/core';

// Services
import { StoreChangeFormService } from "../../../save-user/services/store-change-form.service";

@Component({
  selector: 'app-save-dialog',
  templateUrl: './save-dialog.component.html',
  styleUrls: ['./save-dialog.component.scss'],
})
export class  SaveDialogComponent {
  constructor(private storeChangeFormService: StoreChangeFormService) {}

  onClearForm(): void {
    this.storeChangeFormService.clearForm$.next();
  }

  onSaveForm(): void {
    this.storeChangeFormService.isSaved = true;
  }
}
